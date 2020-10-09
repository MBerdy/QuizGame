import React from 'react';

import Prize from './Prize/Prize';
import classes from './Prizes.module.css'

const Prizes =(props) => {
    const prizes =[
        "1,000,000", 
        "500,000", 
        "250,000", 
        "125,000", 
        "64,000", 
        "32,000", 
        '16,000',
        "8,000",
        "4,000",
        "2,000",
        "1,000",
        "500"];    
    return (
        <div className={classes.Prizes}>
            {prizes.map((prize) => {
                return <Prize 
                            key={prize} 
                            value={prize}                            
                            reachedPrize ={props.currentPrize} />
            })}
        </div>
    );
}
 
export default Prizes;