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
        isActive={props.activeList._id === list._id}
        getActiveList={props.getActiveList}
        />
    );

    // const findActiveList = (lists) => {
    //     let activeList = props.lists.filter(list =>{
    //         return list._id === props.activeList;
    //     })
    //     activeList = activeList[0];
    //     return activeList; 
    // }

    // const newActiveList = findActiveList(props.lists);

    return (
        <div className="home__wrapper">
            <div className="home__container">
                <div className="home__title-container">
                    <h2 className="heading__2"> {props.lists.length} lists</h2>
                    <Button btnType="primary" iconType="add" text="Create list"/>
                </div>
                {lists}
            </div>
            <div className="home__single-list">
                <List activeList={props.activeList}/>
            </div>
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

