import React from 'react'

const AddIcon = (props) => {

    const size = props.dimensions;
    const color = props.iconColor;

    return (
        <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="none" d="M0 0h32v32H0z"/><path fill={color} d="M23 15h-6V9h-2v6H9v2h6v6h2v-6h6v-2z"/></svg>
    )
}

export default AddIcon;
