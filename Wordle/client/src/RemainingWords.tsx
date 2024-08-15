import React  from 'react';
import { RemainingWordsProps } from './props';
export default function RemainingWords({remainingWords, bestGuess}: RemainingWordsProps): JSX.Element {
    return (
        <div>
            <h2>Best Guess: {bestGuess}</h2>
            <h1>Remaining Words</h1>
            <div >
                {remainingWords.map((word) => {
                    return <span className='RemWords'> {word.toLowerCase()} </span>
                })}
            </div>
        </div>
    )

}