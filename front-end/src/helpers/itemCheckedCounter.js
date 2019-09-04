export const itemCheckedCounter = (items) => {

    let counter = 0;

    items.forEach(item => {
        if(item.isChecked){
            counter++;
        }
    })

    // return `${counter} / ${items.length}`;
    return {
        counter: counter,
        itemsLength: items.length
    }

} 