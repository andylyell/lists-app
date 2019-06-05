import React from 'react'
import Button from '../../UI/Button/Button';

function HomeList(props) {

    const listItemsChecked = listItems => {
        let counter = 0;
        listItems.forEach(item => {
            //check if listItems.isChecked is true or false
            if(item.isChecked){
                //if  it is true then add 1 to a counter
                counter++ 
            }
        })
        //at the end return the string array that compares checked items to length of whole array
        return `${counter} / ${listItems.length}`;
    }



    return (
        <div className="homelist__container">
            <h4 className="homelist__list-title">{props.listName}</h4>
            <div className="homelist__info-group">
                <p className="homelist__list-items">{listItemsChecked(props.listItems)}</p>
                <Button clicked={console.log('button')} btnType="secondary" iconType="settings"/>
            </div>
        </div>
    )
}

export default HomeList;
