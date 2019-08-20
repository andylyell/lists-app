import React from 'react'
import Button from '../../UI/Button/Button';

function HomeList(props) {

    let counter = 0;
    let itemStyles = '';
    let listItemsCompleted = null;
    let homeContainerStyles = null;

    if(props.listItems.length !== 0){
        props.listItems.forEach(item => {
            if(item.isChecked){ 
                counter++ 
            }
            if(counter === props.listItems.length){
                itemStyles = ['homelist__list-items', 'homelist__list-items--complete'].join(' ');
                listItemsCompleted = returnListCounter()
            } else {
                itemStyles = "homelist__list-items";
                listItemsCompleted = returnListCounter()
            }
        }) 
    } else {
        itemStyles = "homelist__list-items";
        listItemsCompleted = returnListCounter()
    }

    if(props.isActive){
        homeContainerStyles = ['homelist__container', 'homelist--active'].join(' ');
    } else {
        homeContainerStyles = 'homelist__container';
    }

    function returnListCounter() {
        return `${counter} / ${props.listItems.length}`;
    }

    function changeActiveList(e) {
        props.getActiveList(props.listId);
    }

    return (
        <div className={homeContainerStyles} onClick={changeActiveList}>
            <h4 className="homelist__list-title">{props.listName}</h4>
            <div className="homelist__info-group">
                <p className={itemStyles}>{listItemsCompleted}</p>
                <Button clicked={console.log('button')} btnType="secondary" iconType="settings"/>
            </div>
        </div>
    )
}

export default HomeList;


// #region old code

/*

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

*/

// #endregion
