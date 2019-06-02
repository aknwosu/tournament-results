import React from 'react'

const TournamentDetails = props => {
  console.log(Object.keys(props.selectedTournament))
  const convertToDate = (dateString) => {
    return new Date(dateString.split(" ")[0]).toDateString()
  }
  const { selectedTournament: { name, country, city, date_start, date_end, series }} = props
  return (
    <div>
      <div>Tournament Details</div>
      <div>{name}</div>
      <div>{`${city}, ${country}`}</div>
      <div>{`${convertToDate(date_start)} - ${convertToDate(date_end)}`}</div>
      <div>
        <div>Series Information</div>
        <div>Name: {series.name}</div>
        <div>{`${convertToDate(series.date_start)} - ${convertToDate(series.date_end)}`}</div>
      </div>
    </div>
  )
}
export default TournamentDetails