import React from 'react'

const TournamentDetails = props => {
  const convertToDate = (dateString) => {
    return new Date(dateString.split(" ")[0]).toDateString()
  }
  const { selectedTournament: { name, country, city, date_start, date_end, series }} = props
  return (
    <div className="tournament-container">
      <div className="tournament-header" >Tournament Details</div>
      <div className="info-item">
        <div>Name: </div><div>{name}</div>
      </div>
      <div className="info-item">
        <div>Location: </div><div>{`${city}, ${country}`}</div>
      </div>
      <div className="info-item">
        <div>Date: </div><div>{`${convertToDate(date_start)} - ${convertToDate(date_end)}`}</div>
      </div>
      <div className="info-item">
        <div>Series: </div><div>{series.name}</div>
      </div>
      <div className="info-item">
        <div>Series Date: </div><div>{`${convertToDate(series.date_start)} - ${convertToDate(series.date_end)}`}</div>
      </div>
    </div>
  )
}
export default TournamentDetails