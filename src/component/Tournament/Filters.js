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
    let startDates = []
    let endDates = []
    let series = []
    tournaments.forEach(tournament => {
      startDates.push({
        value: tournament.id,
        name: new Date(tournament.date_start.split(" ")[0]).toDateString()})
      
      endDates.push({
      value: tournament.id,
      name: new Date(tournament.date_end.split(" ")[0]).toDateString()
      })
      if (!series.length || !this.seriesExists(series, tournament)) {
        console.log( tournament.series)
        series.push({
          value: tournament.series.id,
          name: tournament.series.name
        })
      }
    })
    this.setState({ startDates, endDates, series })
  }
  seriesExists = (series, tournament) => {
    let exists = series.find(item => {
      return item && item.name === tournament.series.name })
      return exists ? true : false      
  }

  handleChange = ({ target: { value } }) => {
    this.props.setActiveFilter(value)
    this.setState({ filterValue: value })
  }
  handleFilter = ({ target: { value } }) => {
    const { onFilterSelect } = this.props
    if (value) onFilterSelect(value, this.state.filterValue)
  }
  renderFilterSelect = () => {
    const { filterValue } = this.state
    let filters = []
    filters = this.state[filterValue]
    return (
      <select value={this.state.value} onChange={this.handleFilter}>
        <option value="">-- Select --</option>
        {filters.map(filter => <option key={filter.value} value={filter.value}>{filter.name}</option>)}
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
            <option value="startDates">Filter by start date</option>
            <option value="endDates">Filter by end date</option>
            <option value="series">Filter by series</option>
          </select>
          {filterValue && this.renderFilterSelect()}
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