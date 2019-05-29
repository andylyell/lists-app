import React from 'react'

const SearchIcon = (props) => {

    const size = props.dimensions;
    const color = props.iconColor;

    return (
        <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="none" d="M0 0h32v32H0z"/><path fill={color} d="M24.18 23.27l-4.8-4.8a7 7 0 1 0-1.48 1.34l4.87 4.87zM14 19a5 5 0 1 1 5-5 5 5 0 0 1-5 5z"/></svg>
    )
}

export default SearchIcon
