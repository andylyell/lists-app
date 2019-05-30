import React from 'react'
import { iconColorHandler } from '../../../helpers/iconColorSwitch';

const AddIcon = (props) => {

    const size = props.dimensions;
    // let colorClass = null;

    let colorClass = iconColorHandler(props.iconColor);

    // switch(props.iconColor){
    //     case('primary'): colorClass = 'icon__primary'; break;
    //     case('seconday'): colorClass = 'icon__secondary'; break;
    //     default: colorClass = 'icon__primary';
    // }

    return (
        <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="none" d="M0 0h32v32H0z"/><path className={colorClass} d="M23 15h-6V9h-2v6H9v2h6v6h2v-6h6v-2z"/></svg>
    )
}

export default AddIcon;
