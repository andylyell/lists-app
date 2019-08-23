import React from 'react'
import Button from '../../UI/Button/Button';

const ListCategory = (props) => {

    const { name, listItems } = props.categoryDetail;

    let renderedList;
    let counter = 0;

    if(listItems.length !== 0){
        listItems.forEach(item => {
            if(item.isChecked){
                counter++
            }
        })
    }

    if(name === 'itemsWithNoCategories'){
        renderedList = <p>This is where items go</p>
    } else {
        renderedList = 
        <div className="list-category">
            <div className="list-category__title-container">
                <svg className="list-category__caret-icon" width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="none" d="M0 0h32v32H0z" data-name="viewbox-frame"/><path fill="#000000" d="M16 20.95l-7.78-7.78 1.42-1.41L16 18.12l6.36-6.36 1.42 1.41L16 20.95z"/></svg>
                <h3 className="heading__3">{name}</h3>
            </div>
            <div className="list-category__control-container">
                <div className="list-category__item-checker">
                    {counter}/{listItems.length} checked
                </div>
                <Button btnType="secondary" iconType="settings"/>
            </div>
        </div>
    }

    return (    
        <>
            {renderedList}
        </>
    )
}

export default ListCategory;

//#region notes
/*

---
Collapse Expand button
Category Title

Checked identifier
Category Control
---


<div className="list-category">
            <div className="list-category__title-container">
                <svg className="list-category__caret-icon" width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="none" d="M0 0h32v32H0z" data-name="viewbox-frame"/><path fill="#000000" d="M16 20.95l-7.78-7.78 1.42-1.41L16 18.12l6.36-6.36 1.42 1.41L16 20.95z"/></svg>
                <h3 className="heading__3">{name}</h3>
            </div>
            <div className="list-category__control-container">
                <div className="list-category__item-checker">
                    Items to be checked
                </div>
                <Button btnType="secondary" iconType="settings"/>
            </div>
        </div>

*/
//#endregion