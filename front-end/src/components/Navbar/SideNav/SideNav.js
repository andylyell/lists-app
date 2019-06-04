import React from 'react';
import Button from '../../UI/Button/Button';

const SideNav = (props) => {

    let sideNavClasses = null;
    props.sideNavToggled ? sideNavClasses = ['sidenav__container', 'sidenav__container--open'].join(' ') : sideNavClasses = 'sidenav__container';

    return (
        <div className={sideNavClasses}>
            <div className="sidenav__header">
                <div className="sidenav__header-button-group">
                    <Button clicked={props.onToggle} btnType="tertiary" iconType="close"/>
                    <h2 className="heading__2">{props.lists.length} Lists</h2>
                </div>
                <Button clicked={show} text="Create list" btnType="primary" iconType="add"/>
            </div>
        </div>
    )
}

// #region test functions

const show = () => {
    console.log('buttonClicked');
}

// #endregion

export default SideNav;
