import React, { useState } from 'react'

export default function SearchBar({ setSearchResults }) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    // Call API with user's search query
    const res = await fetch(`api/search?q=${searchQuery}`)
    const json = await res.json()

    // Update state with fetched data
    setSearchResults(json.results)
  }

  return (
      <form onSubmit={handleSearch}>
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
  )
}
