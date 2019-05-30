import React from 'react';

const MenuIcon = (props) => {

    const size = props.dimensions;
    let colorClass = null;

    switch(props.iconColor){
        case('primary'): colorClass = 'icon__primary'; break;
        case('secondary'): colorClass = 'icon__secondary'; break;
        default: colorClass = 'icon__primary';
    }

    return (
        <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="none" d="M0 0h32v32H0z"/><path className={colorClass} d="M8 21h8v2H8zM16 9h8v2h-8zM8 15h16v2H8z"/></svg>
    )
}

export default MenuIcon;
