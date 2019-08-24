import React from 'react'

const ListItem = (props) => {

    const { name } = props.itemDetail;

    return (
        <div className="list-item">
            {name}
        </div>
    )
}

export default ListItem
