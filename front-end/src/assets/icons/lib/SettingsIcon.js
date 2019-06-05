import React from 'react';
import { iconColorHandler } from '../../../helpers/iconColorSwitch';

function SettingsIcon(props) {

    const size = props.dimensions;
    let colorClass = iconColorHandler(props.iconColor);

    return (
        <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="none" d="M0 0h32v32H0z"/><path fill={colorClass} d="M16 13a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/><path fill={colorClass} d="M23.16 16.48v-1l1.34-1.25a1 1 0 0 0 .18-1.23l-1.77-3a1 1 0 0 0-1.16-.46L20 10l-.82-.48-.42-1.78a1 1 0 0 0-1-.78h-3.54a1 1 0 0 0-1 .78l-.42 1.78-.8.48-1.75-.5a1 1 0 0 0-1.16.5l-1.77 3a1 1 0 0 0 .18 1.23l1.34 1.25v1L7.5 17.73A1 1 0 0 0 7.32 19l1.77 3a1 1 0 0 0 1.16.46L12 22l.82.48.42 1.78a1 1 0 0 0 1 .78h3.56a1 1 0 0 0 1-.78l.42-1.78L20 22l1.76.54a1 1 0 0 0 1.15-.54l1.77-3a1 1 0 0 0-.18-1.23zm-1.69 1.16l1.08 1-1 1.7-1.41-.43a1 1 0 0 0-.79.09l-1.58.91a1 1 0 0 0-.48.64L17 23h-2l-.33-1.44a1 1 0 0 0-.48-.64L12.63 20a1 1 0 0 0-.79-.09l-1.41.43-1-1.7 1.08-1a1 1 0 0 0 .31-.73v-1.82a1 1 0 0 0-.31-.73l-1.08-1 1-1.7 1.41.43a1 1 0 0 0 .79-.09l1.58-.91a1 1 0 0 0 .48-.64L15 9h2l.33 1.44a1 1 0 0 0 .48.64l1.58.91a1 1 0 0 0 .79.09l1.41-.43 1 1.7-1.08 1a1 1 0 0 0-.31.73v1.82a1 1 0 0 0 .27.74z"/></svg>
    )
}

export default SettingsIcon;
