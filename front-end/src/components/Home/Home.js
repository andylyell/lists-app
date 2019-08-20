import React from 'react';
import HomeList from './HomeList/HomeList';
import Button from '../UI/Button/Button';
import List from '../List/List';

function Home(props) {

    const lists = props.lists.map((list) => 
        <HomeList
        key={list._id}
        listId={list._id}
        listName={list.name}
        listItems={list.listItems}
        listCategories={list.categories}
        isActive={props.activeList === list._id}
        getActiveList={props.getActiveList}
        />
    );

    return (
        <div className="home__wrapper">
            <div className="home__container">
                <div className="home__title-container">
                    <h2 className="heading__2"> {props.lists.length} lists</h2>
                    <Button btnType="primary" iconType="add" text="Create list"/>
                </div>
                {lists}
            </div>
            <List activeList={props.activeList}/>
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

