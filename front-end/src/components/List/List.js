import React from 'react'
import Button from '../UI/Button/Button';

const List = (props) => {
    
    return (
        <div>
            <div className="list__title">
                <h1>{props.activeList.name}</h1>
                <div className="list__control-group">
                    <Button btnType="primary" iconType="add" text="Add Item"/>
                    <Button clicked={console.log('button')} btnType="secondary" iconType="settings"/>
                </div>
            </div>
        </div>
    )
}

export default List;