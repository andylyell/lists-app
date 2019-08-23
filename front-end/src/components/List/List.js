import React from 'react'
import Button from '../UI/Button/Button';
import ListCategory from './ListCategory/ListCategory';

const List = (props) => {

    const { categories, listItems } = props.activeList;
    
    let newCategoryArray = [];
    let newCategories = []
    

    if(categories){
        newCategoryArray = [ ...categories ];
        newCategoryArray.forEach((category) => {
            category.listItems = [];
        })
        if(listItems){
            let noListCategory = {
                "_id": Math.floor(Math.random() * 1000000000),
                "name": 'itemsWithNoCategories',
                "listItems": []
            }
            listItems.forEach(item => {
                if(!item.category){
                    noListCategory.listItems.push(item)
                }
            })
            newCategoryArray.push(noListCategory);            

            listItems.forEach(item => newCategoryArray.forEach( category => {
                if(item.category){
                    if(category._id === item.category._id){
                        category.listItems.push(item)
                    }
                } 
            }))
        }
    } else {
        console.log('no categories');
    }

    
    newCategories = newCategoryArray.map((category) => 
    <ListCategory
        key={category._id}
        categoryDetail={category}
    />)
        
    return (
        <div>
            <div className="list__title">
                <h1>{props.activeList.name}</h1>
                <div className="list__control-group">
                    <Button btnType="primary" iconType="add" text="Add Item"/>
                    <Button btnType="secondary" iconType="settings"/>
                </div>
            </div>
            {newCategories}
        </div>
    )
}

export default List;

//#region notes



//#endregion