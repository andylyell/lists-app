import React from 'react';
import HomeList from './HomeList/HomeList';

function Home(props) {

    const lists = props.lists.map((list) => 
        <HomeList
        key={list._id}
        listName={list.name}
        listItems={list.listItems}/>
    );

    return (
        <div className="home__container">
            <h2 className="heading__2 home__title"> {props.lists.length} lists</h2>
            {lists}
        </div>
    )
}

export default Home;



// #region example array
/*

<ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>


*/
// #endregion

