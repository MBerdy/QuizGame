import React from 'react';

import classes from './DrawerToggle.module.css';

class DrawerToggle extends React.Component {
    shouldComponentUpdate(nextProps, ) {
        return nextProps.open !== this.props.open  
    }
    render() {
        let attachedClasses = [classes.DrawerToggle];
        if (this.props.open) {
            attachedClasses = [classes.DrawerToggle, classes.Open];
        }
        return (
            <div onClick={this.props.prizeToggleClicked} className={attachedClasses.join(' ')}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )

    }


};

export default DrawerToggle