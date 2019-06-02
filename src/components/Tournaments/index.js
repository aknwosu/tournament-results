import React, { Component } from 'react'
import ListView from './ListView'
import TournamentDetails from './Details'
import Modal from '../Modal'
import './styles.css'

class Tournament extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayedTournaments: props.tournaments,
      selectedTournament: {},
      activeFilter: "",
      searchText: "",
      tournaments: props.tournaments
    }
  }
  onTournamentSelect = selectedTournament => {
    this.setState({ selectedTournament })
  }
  onSearch = () => {
    const { tournaments } = this.state
    const { searchText } = this.state
    if (searchText) {
    const filteredTournaments = tournaments.filter(tournament => tournament.name.toLowerCase().includes(searchText.toLowerCase()))
    return this.setState({ displayedTournaments: filteredTournaments})
    }
    this.setState({ displayedTournaments: tournaments })
  }

  onSearchTextChange = ({target: {value}}) => {
    this.setState({ searchText: value }, () => this.onSearch())
  }
  setActiveFilter = activeFilter => {
    this.setState({ activeFilter, selectedTournament: {} }, () => {
      if (!activeFilter) {
        this.setState({ displayedTournaments: this.state.tournaments })
      }
    })
  }
  onFilterSelect = (selected, appliedFilter) => {
    const { tournaments } = this.state
    let selectedTournament = []
    if (appliedFilter === "series") {
      selectedTournament = tournaments.filter((tournament) => tournament.series.id == selected)
    } else {
      selectedTournament = tournaments.filter((tournament) => tournament.id == selected)
    }
    this.setState({ displayedTournaments: selectedTournament, selectedTournament: {}})
  }
  handleModalClose = () => {
    this.setState({ selectedTournament: {}})
  }
  renderMobileView = () => {
    const { selectedTournament } = this.state
    if (selectedTournament.id) {
      return (
        <Modal handleClose={this.handleModalClose}>
          <TournamentDetails
            selectedTournament={selectedTournament}
          />
        </Modal>
      )
    }
  }
  renderEmptyView = () => {
    return <div>When you select a tournament, it will appear here...</div>
  }
  render() {
    const { searchText, displayedTournaments, selectedTournament } = this.state
    const { isMobileView } = this.props
    return (
      <div className="tournaments">
        <ListView
          tournaments={displayedTournaments}
          onTournamentSelect={this.onTournamentSelect}
          onSearchTextChange={this.onSearchTextChange}
          searchText={searchText}
          onFilterSelect={this.onFilterSelect}
          setActiveFilter={this.setActiveFilter}
          selectedTournament={selectedTournament}
        />
        {!!Object.keys(selectedTournament).length && isMobileView && this.renderMobileView()}
        {!isMobileView && !!Object.keys(selectedTournament).length && <TournamentDetails selectedTournament={selectedTournament} />}
        {!isMobileView && !Object.keys(selectedTournament).length && this.renderEmptyView()}
      </div>
    )
  }
}
export default Tournament