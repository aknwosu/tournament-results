import React, { Component } from 'react'
import { fetchStuff } from '../../apiCall'
class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      tournaments: []
    }
  }
  async componentDidMount() {
    const tournaments = await fetchStuff()
    this.setState({ tournaments: JSON.parse(tournaments)})
  }
  render() {
    const { tournaments } = this.state
    console.log("tournaments===========", tournaments)
    return (
      <div>
        <div>Hello Feefee</div>
        {tournaments && tournaments.map(tournament => (
          <div key={tournament.id}>{tournament.name}</div>
        ))}
      </div>
    )
  }
}
export default HomePage

