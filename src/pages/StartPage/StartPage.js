import React from 'react';

import HandLogo from '../../components/UI/HandLogo/HandLogo';
import Button from '../../components/UI/Button/Button';
import classes from './StartPage.module.css';
class StartPage extends React.Component {
    render() {
        return (
            <div className={classes.StartPage}>
                <div className={classes.Container}>
                    <HandLogo />
                    <div className={classes.Main} >
                        <h1 className={classes.Header}>Who wants to be a millionaire?</h1>
                        <Button clicked={this.props.startGame}>Start</Button>
                    </div>
                </div>
            </div>
        )
    }

}

export default StartPage;