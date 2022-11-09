import React, { Dispatch, SetStateAction } from "react"
import { StyledSearch } from "../ui/styledSearch"

interface Props {
    filterValues: string,
    setFilterValues: Dispatch<SetStateAction<string>>
}

const Search: React.FC<Props> = ({ filterValues, setFilterValues }) => {
    
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