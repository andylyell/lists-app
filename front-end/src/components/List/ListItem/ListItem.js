import React from 'react'

const ListItem = (props) => {

    const { name, amount } = props.itemDetail;

    return (
        <div className="list-item">
            <div className="list-item__title">
                <input type="checkbox" name="itemChecked" className="list-item__checkbox"/>
                {name}
            </div>
            <div className="list-item__control-group">
                <div className="list-item__amount">x {amount}</div>   
                <p>EDIT</p>
            </div>
        </div>
    )
}

export default ListItem
