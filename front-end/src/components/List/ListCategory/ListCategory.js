import React from 'react'
import Button from '../../UI/Button/Button';

const ListCategory = (props) => {

    const { name, listItems } = props.categoryDetail;

    return (
        <div className="list-category">
            <div className="list-category__title-container">
                <Button btnType="secondary" iconType="add"/>
                <h3 className="heading__3">{name}</h3>
            </div>
            <div className="list-category__control-container">
                Shows how many items are checked
            </div>
        </div>
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

*/
//#endregion