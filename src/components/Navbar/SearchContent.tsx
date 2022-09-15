import React from 'react'
import { useGlobalState } from '../../context/AppContext'

const SearchContent = () => {
    const { searchContentRef } = useGlobalState()
    return (
        <div ref={searchContentRef}>SearchContent</div>
    )
}

export default SearchContent