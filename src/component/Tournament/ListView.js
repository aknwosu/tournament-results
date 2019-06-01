import React from 'react'
import Filters from './Filters'

export const ListView = (props) => {
  const {
    tournaments, onTournamentSelect, onSearchTextChange, searchText, onDateSelect
  } = props
  return(
    <div>
      <Filters
        tournaments={tournaments}
        onSearchTextChange={onSearchTextChange}
        searchText={searchText}
        onDateSelect={onDateSelect}
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