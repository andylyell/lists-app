import React from 'react';
import { MenuIcon, AddIcon, SearchIcon, CloseIcon, SettingsIcon } from '../../../assets/icons/index';

const Button = (props) => {

    let btnClasses = null;
    let iconColor = null;
    let icon = null;

    switch(props.btnType){
        case('primary'): btnClasses = ['button__container', 'button__primary'].join(' '); iconColor = 'primary'; break;
        case('secondary'): btnClasses = ['button__container', 'button__secondary'].join(' '); iconColor = 'secondary'; break;
        case('tertiary'): btnClasses = ['button__container', 'button__tertiary'].join(' '); iconColor = 'tertiary'; break;
        default: btnClasses = 'button__primary'; break;
    }

    switch(props.iconType){
        case('add'): icon = <AddIcon dimensions="32" iconColor={iconColor}/>; break;
        case('close'): icon = <CloseIcon dimensions="32" iconColor={iconColor}/>; break;
        case('menu'): icon = <MenuIcon dimensions="32" iconColor={iconColor}/>; break;
        case('search'): icon = <SearchIcon dimensions="32" iconColor={iconColor}/>; break;
        case('settings'): icon = <SettingsIcon dimensions="32" iconColor={iconColor}/>; break;
        default: icon = null;
    }

    return (
        <div onClick={props.clicked} className={btnClasses}>
                {props.text}
                {icon}
        </div>
    )
};

export default Button;
