import React from 'react'
import Button from '../UI/Button/Button';
import SideNav from './SideNav/SideNav';

class Navbar extends React.Component {

    state = {
        sideNavToggled: false
    }

    changeHandler = (e) => {
        console.log(e.target);
    }

    onToggleHandler = () => {
        this.setState({
            sideNavToggled: !this.state.sideNavToggled
        })
    }

    render(){
        return (
            <div className="navbar__container">
                <SideNav lists={this.props.lists} onToggle={this.onToggleHandler} sideNavToggled={this.state.sideNavToggled}/>
                <div className="navbar__button-group">
                    <Button clicked={this.onToggleHandler} btnType="secondary" iconType="menu"/>
                    <Button clicked={this.changeHandler} text="Add item" btnType="primary" iconType="add"/>
                    <Button clicked={this.changeHandler} text="Quick add" btnType="primary" iconType="add"/>
                </div>
                <Button clicked={this.changeHandler} btnType="secondary" iconType="search"/>
            </div>
        )
    };
};

export default Navbar;
