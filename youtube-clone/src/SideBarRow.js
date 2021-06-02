import React from 'react';
import './Side_Bar_Row.css';

function SideBarRow({selected, Icon, title }) {
    return (
        <div className= {`side_bar_row ${selected && "selected"}`}>
            <Icon className= "sidebar_icon" />

            <h2 className="sidebar_title">{ title }</h2>
        </div>
    )
}

export default SideBarRow
