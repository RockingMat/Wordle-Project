import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import { Guesses, Current, Future } from './rows';
import Keyboard from './Keyboard';
import Notif from './notif';
import {WordProps, AlertProps} from './props';
import RemainingWords from './RemainingWords';


let checkWords: Set<string> = new Set();

fetch("/api/guesses")
    .then(res => res.json())
    .then((data) => {
        const words = data.words;
        for (let i = 0; i < words.length; i++) {
            checkWords.add(words[i].toUpperCase());
        }
    });

export default function WordleGame({word}: WordProps): JSX.Element{
    const [guess, setGuess] = useState([] as string[]);
    const [vals, setVals] = useState(Array(5).fill(''));
    const [won, setWon] = useState(false);
    const [letters, setLetters] = useState(Array(26).fill(0));
    const [isShowingAlert, setIsShowingAlert] = useState({showing: false, message: ""} as AlertProps);
    const [remainingWords, setRemainingWords] = useState([] as string[]);
    const [bestGuess, setBestGuess] = useState('');
    const updateLetters = (current: string) => {
        let placeholder = letters.slice();
        for(let i = 0; i < 5; i++){
            if(current.charAt(i) === word.charAt(i)){
                placeholder[current.charCodeAt(i)-'A'.charCodeAt(0)] = 1;
            }else if(word.includes(current.charAt(i)) && letters[current.charCodeAt(i)-'A'.charCodeAt(0)] === 0){
                placeholder[current.charCodeAt(i)-'A'.charCodeAt(0)] = 2;
            }else if(!word.includes(current.charAt(i))){
                placeholder[current.charCodeAt(i)-'A'.charCodeAt(0)] = 3;
            }
        }
        setLetters(placeholder);
    }
    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === 'Enter'){
            let current: string = "";
            let correct: bigint = 0n;
            for(let i = 0; i < 5; i++){
                if(vals[i].length !== 1){
                    return;
                }
                current += vals[i];
                if(vals[i] === word.charAt(i)){
                    correct += 1n;
                }
            }
            if(check(current)){
                updateLetters(current);
                fetch("/api/remaining", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({guesses: guess.concat(current)})
                })
                    .then(res => res.json())
                    .then((data) => {
                        setRemainingWords(data.remainingWords);
                        setBestGuess(data.bestGuess);
                    });
                setGuess(guess.concat(current));
                
                if(correct === 5n){
                    setWon(true);
                    setIsShowingAlert({showing: true, message: "You Win!"});
                }else if(guess.length === 5){
                    setWon(true);
                    setIsShowingAlert({showing: true, message: "You Lose!"});
                }
                for(let i = 0; i < 5; i++){
                    vals[i] = '';
                }
            }else{
                setIsShowingAlert({showing: true, message: "Not in word list"});
            }
        }
    }
    /**
     * check a guess
     */
    const check = (word: string): boolean => {
        return checkWords.has(word);
    }
    
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    });

    let result = [];
    for(let i = 0; i < guess.length; i++){
        result.push(<Guesses key = {i} word = { word } guess = {guess[i]} />);
    }
    if(!won){
        result.push(<Current vals = {vals} setVals = {setVals}/>);
    }else if(guess.length < 6){
        result.push(<Future />);
    }
    for(let i = guess.length; i < 5; i++){
        result.push(<Future />);
    }

    return (
        <div className = "relative">
            <Notif props = {isShowingAlert} setProps = {setIsShowingAlert}/>
            <div className = "game">
                {result}
            </div>
            <Keyboard states = {letters}/>
            <RemainingWords remainingWords = {remainingWords} bestGuess = {bestGuess}/>
        </div>
    );
}

