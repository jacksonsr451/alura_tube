import React, { useState } from "react"
import { StyledSearch } from "../ui/styledSearch"

const Search = ({ filterValues, setFilterValues }) => {
    
    return (
        <StyledSearch>
            <input type="text" onChange={(event) => setFilterValues(event.target.value)} value={filterValues} />
            <button>
                🔎
            </button>
        </StyledSearch>
    )
}

export default Search