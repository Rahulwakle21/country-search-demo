import React from 'react'

const SearchBar = ({setSearch}) => {
    return (
        <div>
            <input onChange={(e) => setSearch(e.target.value.toLowerCase())} type="text" placeholder='search country' />
        </div>
    )
}

export default SearchBar
