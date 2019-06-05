import React from 'react'
import Button from '../../UI/Button/Button';

function HomeList(props) {

    const checkedListItems = (listItems) => {

        let counter = 0;
        listItems.forEach(item => {
            if(item.isChecked){ 
                counter++ 
            }
        })
        return `${counter} / ${listItems.length}`; 
    };

    const checkListStyle = (listItems) => {

        let counter = 0;
        let itemStyles = '';

        if(listItems.length !== 0){
            listItems.forEach(item => {
                if(item.isChecked){ 
                    counter++ 
                }
                if(counter === listItems.length){
                    itemStyles = ['homelist__list-items', 'homelist__list-items--complete'].join(' ');
                } else {
                    itemStyles = "homelist__list-items";    
                }
            })
        } else {
            itemStyles = "homelist__list-items";
        }
        
        return itemStyles; 
    }

    return (
        <div className="homelist__container">
            <h4 className="homelist__list-title">{props.listName}</h4>
            <div className="homelist__info-group">
                <p className={checkListStyle(props.listItems)}>{checkedListItems(props.listItems)}</p>
                <Button clicked={console.log('button')} btnType="secondary" iconType="settings"/>
            </div>
        </div>
    )
}

export default HomeList;


// #region old code

/*

import React from 'react'
import Button from '../../UI/Button/Button';

function HomeList(props) {

    let listItemsStyles = '';

    const listItemsChecked = listItems => {
        let counter = 0;
        const itemsLength = parseInt(listItems.length); 

        listItems.forEach(item => { //check if listItems.isChecked is true or false
            if(item.isChecked){ //if  it is true then add 1 to a counter
                counter++ 
            }
            if(counter === itemsLength && itemsLength !== 0){
                listItemsStyles = ['homelist__list-items', 'homelist__list-items--complete'].join(' ');
            } else {
                listItemsStyles = "homelist__list-items";    
            }
        })
        
        return `${counter} / ${listItems.length}`; //at the end return the string array that compares checked items to length of whole array
    }

    // listComplete ? listItemsStyles = ['homelist__list-items', 'homelist__list-items--complete'].join(' ') : listItemsStyles = "homelist__list-items";

    return (
        <div className="homelist__container">
            <h4 className="homelist__list-title">{props.listName}</h4>
            <div className="homelist__info-group">
                <p className={listItemsStyles}>{listItemsChecked(props.listItems)}</p>
                <Button clicked={console.log('button')} btnType="secondary" iconType="settings"/>
            </div>
        </div>
    )
}

export default HomeList;

*/

// #endregion
