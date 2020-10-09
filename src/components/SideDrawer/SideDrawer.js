import React from 'react';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './SideDrawer.module.css';

class SideDrawer extends React.Component {
    render() {
        let attachedClasses = [classes.SideDrawer, classes.Close];
        if (this.props.open) {
            attachedClasses = [classes.SideDrawer, classes.Open]
        }
        return (
            <div className={attachedClasses.join(' ')}>
                <DrawerToggle
                    prizeToggleClicked={this.props.prizeToggleClicked}
                    open={this.props.open} />
                {this.props.children}
            </div>
        );
    }

}

export default SideDrawer;