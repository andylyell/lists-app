export const iconColorHandler = (iconClass) => {

    console.log('colorclass');

    let colorClass = null;

    switch(iconClass){
        case('primary'): colorClass = 'icon__primary'; break;
        case('seconday'): colorClass = 'icon__secondary'; break;
        default: colorClass = 'icon__primary';
    }

    return colorClass;
}