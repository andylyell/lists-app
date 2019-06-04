import React from 'react';
import { iconColorHandler } from '../../../helpers/iconColorSwitch';

const CloseIcon = (props) => {

    const size = props.dimensions;
    let colorClass = iconColorHandler(props.iconColor);

    return (
        <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="none" d="M0 0h32v32H0z"/><path className={colorClass} d="M21.66 11.76l-1.42-1.42L16 14.59l-4.24-4.25-1.42 1.42L14.59 16l-4.25 4.24 1.42 1.42L16 17.41l4.24 4.25 1.42-1.42L17.41 16l4.25-4.24z"/></svg>
    )
}

export default CloseIcon
