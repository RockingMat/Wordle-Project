import React from 'react';

export default function LetterBox(props: {letter: string, state: number}): JSX.Element{
    if(props.state === 0){
        return (
            <div className = 'letterBox letterBoxEmpty'>
            </div>
        );
    }else if(props.state === 1){
        return (
            <div className = 'letterBox letterBoxCorrect'>
                {props.letter}
            </div>
        );
    }else if(props.state === 2){
        return (
            <div className = 'letterBox letterBoxMisplaced'>
                {props.letter}
            </div>
        );
    }else if (props.state === 3){
        return (
            <div className = 'letterBox letterBoxIncorrect'>
                {props.letter}
            </div>
        );
    }else{
        return (
            <div className = 'letterBox letterBoxFilled'>
                {props.letter}
            </div>
        );
    }
    
}