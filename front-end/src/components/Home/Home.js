import React from 'react';
import HomeList from './HomeList/HomeList';

function Home(props) {
    return (
        <div className="home__container">
            <h2 className="heading__2 home__title"> {props.lists.length} lists total</h2>
            <HomeList/>
        </div>
    )
}

export default Home
