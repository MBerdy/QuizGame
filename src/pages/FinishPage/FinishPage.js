import React from 'react';

import HandLogo from '../../components/UI/HandLogo/HandLogo';
import Button from '../../components/UI/Button/Button';
import classes from './FinishPage.module.css';

class FinishPage extends React.Component {
    render() {
        return (
            <div className={classes.FinishPage}>
                <div className={classes.Container}>
                    <HandLogo />
                    <div className={classes.Main}>
                        <p className={classes.Text}>Total score:</p>
                        <h1 className={classes.Header}>$ {this.props.totalPrize} earned</h1>
                        <Button clicked={this.props.startGame}>Try again</Button>
                    </div>
                </div>
            </div>
        );
    }

}

export default FinishPage;