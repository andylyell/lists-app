import React from 'react'

const ListItem = (props) => {

    const { name } = props.itemDetail;

    return (
        <div className="list-item">
            <div className="list-item__title">
                {name}
            </div>
            <div className="list-item__control-group">
                <p>AMOUNT</p>
                <p>EDIT</p>
            </div>
        </div>
    )
}

export default ListItem
