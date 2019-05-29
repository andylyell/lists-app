import React from 'react'
import Button from '../UI/Button/Button';

const Navbar = (props) => {

    return (
        <div className="navbar__container">
            <div className="navbar__button-group">
                <Button btnType="secondary" iconType="menu"/>
                <Button text="Add item" btnType="primary" iconType="add"/>
                <Button text="Quick add" btnType="primary" iconType="add"/>
            </div>
            <Button btnType="secondary" iconType="search"/>
        </div>
    )
}

export default Navbar
