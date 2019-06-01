import React, { Component } from 'react'
import { fetchStuff } from '../../apiCall'
import Tournament from '../Tournament'

class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      tournaments: [],
      activeTournament: {}
    }
  }
  async componentDidMount() {
    const tournaments = await fetchStuff()
    this.setState({ tournaments: JSON.parse(tournaments)})
  }
  render() {
    const { tournaments } = this.state
    return (
      <div>
        <div>Hello Feefee</div>
        {!!tournaments.length && <Tournament tournaments={tournaments} /> }
      </div>
    )
  }
}
export default HomePage

