import React, { Component } from 'react'

class Filters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      series: [],
      startDates: [],
      endDates: [],
      filterValue: "",
      searchText: ""
    }
  }

  componentDidMount() {
    this.populateFilters()
  }

  populateFilters() {
    const { tournaments } = this.props
    // const { startDates, endDates } = this.state
    let startDates = []
    let endDates = []
    tournaments.forEach(tournament => {
      startDates.push({
        value: tournament.id,
        name: new Date(tournament.date_start.split(" ")[0]).toDateString()})
      
      endDates.push({
      value: tournament.id,
      name: new Date(tournament.date_end.split(" ")[0]).toDateString()
      })
    })
    this.setState({ startDates, endDates })
  }
  handleChange = ({target: {value}}) => {
    this.setState({ filterValue: value });
  }
  renderFilterByDate = () => {
    const { filterValue, startDates, endDates } = this.state
    let filters = []
    filterValue === "startDate" ? filters = startDates : filters = endDates
    return (
      <select value={this.state.value} onChange={this.handleFilter}>
        {filters.map(filter => <option value={filter.value}>{filter.name}</option>)}
        <option value="">Select a filter</option>
      </select>

    )
  }

  render() {
    const { filterValue } = this.state
    const { onSearchTextChange, searchText} = this.props
    return (
      <div>
        <div>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="">Select a filter</option>
            <option value="startDate">Filter by start date</option>
            <option value="endDate">Filter by end date</option>
          </select>
          {filterValue && this.renderFilterByDate()}
        </div>
        <input
          autoFocus
          name="search"
          value={searchText}
          onChange={onSearchTextChange}
        />
        </div>
    )
  }
}
export default Filters