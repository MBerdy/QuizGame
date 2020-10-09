import React from 'react';

import QuestionBlock from '../../components/QuestionBlock/QuestionBlock';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import DrawerToggle from '../../components/SideDrawer/DrawerToggle/DrawerToggle';
import Prizes from '../../components/Prizes/Prizes';
import classes from './QuestionsPage.module.css'

class QuestionsPage extends React.Component {
    render() {
        return (
            <div className={classes.QuestionPage}>
                <DrawerToggle
                    open={this.props.openPrize}
                    prizeToggleClicked={this.props.prizeToggleClicked} />
                <QuestionBlock
                    currentNumQuestion={this.props.currentNumQuestion}
                    selected={this.props.selectedAnswer} />
                <SideDrawer
                    open={this.props.openPrize}
                    prizeToggleClicked={this.props.prizeToggleClicked}>
                    <Prizes currentPrize={this.props.currentNumQuestion.prize} />
                </SideDrawer>
            </div>
        );
    }
}

export default QuestionsPage;