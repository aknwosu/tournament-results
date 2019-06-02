import React from 'react'
import Filters from './Filters'

export const ListView = props => {
  const {
    tournaments, onTournamentSelect, onSearchTextChange, searchText, onFilterSelect, setActiveFilter
  } = props
  return(
    <div>
      <Filters
        tournaments={tournaments}
        onSearchTextChange={onSearchTextChange}
        searchText={searchText}
        onFilterSelect={onFilterSelect}
        setActiveFilter={setActiveFilter}
      />
      {tournaments.map(tournament => (
        <div
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