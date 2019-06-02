import React, { Component } from 'react'
import { fetchStuff } from '../../apiCall'
import Tournaments from '../Tournaments'
import './styles.css'
class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      tournaments: [],
      activeTournament: {},
    }
  }
  async componentDidMount() {
    const tournaments = await fetchStuff()
    this.setState({ tournaments: JSON.parse(tournaments)})
  }

  render() {
    const { tournaments } = this.state
    const { isMobileView } = this.props
    return (
      <div className="container">
        <div className="title">Tournaments Results</div>
        {!!tournaments.length && (
          <Tournaments
            tournaments={tournaments}
            isMobileView={isMobileView}
          />
        )}
      </div>
    )
  }
}
export default HomePage

