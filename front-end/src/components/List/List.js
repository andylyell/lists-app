import React from 'react'
import Button from '../UI/Button/Button';

const List = (props) => {
    
    return (
        <div>
            <div className="list__title">
                {props.activeList.name}
                <div className="list__control-group">
                    <Button btnType="primary" iconType="add" text="Create Item"/>
                    <Button clicked={console.log('button')} btnType="secondary" iconType="settings"/>
                </div>
            </div>
        </div>
    )
}

export default List;