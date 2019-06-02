import React from 'react'
import Filters from './Filters'
import './styles.css'

export const ListView = props => {
  const {
    tournaments, onTournamentSelect, onSearchTextChange, searchText, onFilterSelect, setActiveFilter, selectedTournament
  } = props
  return(
    <div className="tournaments-list">
      <Filters
        tournaments={tournaments}
        onSearchTextChange={onSearchTextChange}
        searchText={searchText}
        onFilterSelect={onFilterSelect}
        setActiveFilter={setActiveFilter}
      />
      {tournaments.map(tournament => (
        <div className={`tournament ${tournament.id == selectedTournament.id ? "isActive" : ""}`}
          key={tournament.id}
          onClick={() => onTournamentSelect(tournament)}
        >
          {tournament.name}
        </div>
      ))}
    </div>
  )
}

export default ListView