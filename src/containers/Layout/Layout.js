import React from 'react';

import data from '../../data/data.json';
import StartPage from '../../pages/StartPage/StartPage';
import FinishPage from '../../pages/FinishPage/FinishPage';
import QuestionsPage from '../../pages/QuestionsPage/QuestionsPage';
import Aux from '../../HOC/Auxiliary';
class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            currentNumQuestion: 0,
            totalPrize: "0",
            finished: false,
            started: false,
            showPrize: false
        }
    }

    startGameHandler = () => {
        this.setState({ started: true })
    }

    startGameAgainHandler = () => {
        this.setState({ finished: false, currentNumQuestion: 0, totalPrize: "0" })
    }

    prizeToggleHandler = () => {
        this.setState((prevState) => {
            return { showPrize: !prevState.showPrize }
        })
    }
    
    selectedAnswerHandler = (correct) => {
        let currentPrize = this.state.data[this.state.currentNumQuestion].prize;
        const currentNumQuestion = this.state.currentNumQuestion;
        setTimeout(() => {
            if (correct && currentNumQuestion !== 11) {
                this.setState((prevState) => {
                    return {
                        currentNumQuestion: prevState.currentNumQuestion + 1,
                        totalPrize: currentPrize
                    }
                })
            } else if (currentNumQuestion === 11) {
                this.setState({ finished: true, totalPrize: currentPrize })
            }
            else {
                this.setState({ finished: true })
            }
        }, 200);
    }

    render() {
        const started = this.state.started;
        const finished = this.state.finished;
        let currentPage;
        if (!started && !finished) {
            currentPage = <StartPage startGame={this.startGameHandler} />
        }
        else if (started && (!finished)) {
            currentPage = <QuestionsPage
                currentNumQuestion={this.state.data[this.state.currentNumQuestion]}
                selectedAnswer={this.selectedAnswerHandler}
                openPrize={this.state.showPrize}
                prizeToggleClicked={this.prizeToggleHandler} />
        }
        else if (finished) {
            currentPage = <FinishPage
                startGame={this.startGameAgainHandler}
                totalPrize={this.state.totalPrize} />
        }
        return (
            <Aux>
                {currentPage}
            </Aux>
        );
    }
}

export default Layout;