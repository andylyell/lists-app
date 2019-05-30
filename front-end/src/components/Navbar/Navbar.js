import React from 'react'
import Button from '../UI/Button/Button';

class Navbar extends React.Component {

    changeHandler = (e) => {
        console.log(e.target);
    }

    render(){
        return (
            <div className="navbar__container">
                <div className="navbar__button-group">
                    <Button clicked={this.changeHandler} btnType="secondary" iconType="menu"/>
                    <Button clicked={this.changeHandler} text="Add item" btnType="primary" iconType="add"/>
                    <Button clicked={this.changeHandler} text="Quick add" btnType="primary" iconType="add"/>
                </div>
                <Button clicked={this.changeHandler} btnType="secondary" iconType="search"/>
            </div>
        )
    };
};

export default Navbar;
