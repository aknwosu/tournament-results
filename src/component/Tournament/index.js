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
    // console.log("tournament ====", selectedTournament)
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
  render() {
    console.log(this.props, this.state)
    const { tournaments, searchText, displayedTournaments } = this.state
    return (
      <div>
        <ListView
          tournaments={displayedTournaments}
          onTournamentSelect={this.onTournamentSelect}
          onSearchTextChange={this.onSearchTextChange}
          searchText={searchText}
        />
        {/* {console.log(tournaments)}
        Tourny
        {tournaments.map(tournament => (
          <div key={tournament.id}>{tournament.name}</div>
        ))} */}
      </div>
    )
  }
}
export default Tournament