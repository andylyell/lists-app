import React from 'react'
import { iconColorHandler } from '../../../helpers/iconColorSwitch';

const CaretIcon = (props) => {

    const size = props.dimensions;
    let colorClass = iconColorHandler(props.iconColor);

    return (
        <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="none" d="M0 0h32v32H0z" data-name="viewbox-frame"/><path className={colorClass} d="M16 20.95l-7.78-7.78 1.42-1.41L16 18.12l6.36-6.36 1.42 1.41L16 20.95z"/></svg>
    )
}

export default CaretIcon;
