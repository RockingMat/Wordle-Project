import React, { useState } from 'react';
import WordleGame from './WordleGame';
import './style.css';
import useRunOnce from './hooks';

export default function WordleApp() { 
    const [currentWord, setCurrentWord] = useState('' as string);
    useRunOnce({
        fn: () => {
            fetch("/api/answers")
            .then(res => res.json())
            .then(data => {
                console.log(data.firstWord);
                setCurrentWord(data.firstWord);
            });
        } 
    });
    // /**
    //  * get a random word from the list
    //  */
    // const word = (): string => {
    //     const index = Math.floor(Math.random() * words.length);
    //     return words[index];
    // }
    return (
        <div>
            <h1 className = 'title' >Wordle</h1>
            <hr></hr>
            <WordleGame word = {currentWord}/>
        </div>
    );
}
