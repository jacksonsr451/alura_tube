import React, { Dispatch, SetStateAction } from "react"
import { StyledSearch } from "../ui/styledSearch"

interface SearchProps {
    filterValues: string,
    setFilterValues: Dispatch<SetStateAction<string>>
}

const Search: React.FC<SearchProps> = ({ filterValues, setFilterValues }) => {
    
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