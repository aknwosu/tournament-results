import React from 'react'
import Filters from './Filters'

export const ListView = (props) => {
  const {
    tournaments, onTournamentSelect, onSearchTextChange, searchText
  } = props
  return(
    <div>
      <Filters
        tournaments={tournaments}
        onSearchTextChange={onSearchTextChange}
        searchText={searchText}
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