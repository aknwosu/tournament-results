import React, { Component } from 'react'
import ListView from './ListView'

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

  onDateSelect = selected => {
    const { tournaments } = this.state
    const selectedTournament = tournaments.filter((tournament) => tournament.id === selected)
    this.setState({ displayedTournaments: selectedTournament})
  }
  render() {
    console.log(this.props, this.state)
    const { searchText, displayedTournaments } = this.state
    return (
      <div>
        <ListView
          tournaments={displayedTournaments}
          onTournamentSelect={this.onTournamentSelect}
          onSearchTextChange={this.onSearchTextChange}
          searchText={searchText}
          onDateSelect={this.onDateSelect}
        />
      </div>
    )
  }
}
export default Tournament