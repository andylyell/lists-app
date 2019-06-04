export const iconColorHandler = (iconClass) => {

    let colorClass = null;

    switch(iconClass){
        case('primary'): colorClass = 'icon__primary'; break;
        case('secondary'): colorClass = 'icon__secondary'; break;
        case('tertiary'): colorClass = 'icon__tertiary'; break;
        default: colorClass = 'icon__primary';
    }

    return colorClass;
}