import React, { useEffect, useState } from "react";
import LetterBox from "./LetterBox";
import { CurrentProps, GuessesProps } from "./props";


export function Future(): JSX.Element {
    let result = [];
    for(let i = 0; i < 5; i++){
        result.push(<LetterBox state = {0} letter = '' />);
    }
    return (
        <div className = "row">
            {result}
        </div>
    );
}
export function Guesses({word, guess}: GuessesProps){
    if(word.length !== 5 || guess.length !== 5){
        return <div>Invalid input</div>
    }
    let result = [];
    let occ1 = new Array(26).fill(0);
    let occ2 = new Array(26).fill(0);
    for(let i = 0; i < 5; i++){
        if(word.charAt(i) !== guess.charAt(i)){
            occ1[word.charCodeAt(i)-'A'.charCodeAt(0)]++;
            occ2[guess.charCodeAt(i)-'A'.charCodeAt(0)]++;
        }
    }
    for(let i = 0; i < 5; i++){
        if(word.charAt(i) === guess.charAt(i)){
            result.push(<LetterBox state = {1} letter = { guess.charAt(i) } />);
        }else if(occ1[guess.charCodeAt(i)-'A'.charCodeAt(0)] > 0n){
            occ1[guess.charCodeAt(i)-'A'.charCodeAt(0)]--;
            result.push(<LetterBox state = {2} letter = { guess.charAt(i) } />);
        }else{
            result.push(<LetterBox state = {3} letter = { guess.charAt(i) } />);
        }
    }
    return (
        <div className = "row">
            {result}
        </div>
    );
}
export function Current({vals, setVals}: CurrentProps): JSX.Element {
    let [index, setIndex] = useState(0);
    const handleChange = (e: KeyboardEvent) => {
        const char: string = e.key;
        if(char.length === 1 && ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z"))){
            if(vals[index] === ''){
                setVals(vals.map((val, i) => i === index ? char.toUpperCase() : val));
            }else if(index < 4){
                setVals(vals.map((val, i) => i === index + 1 ? char.toUpperCase() : val));
                setIndex(index + 1);
            }
        }else if(char === "Backspace"){
            setVals(vals.map((val, i) => i === index ? '' : val));
            if(index > 0){
                setIndex(index - 1);
            }
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', handleChange);
        return () => {
            window.removeEventListener('keydown', handleChange);
        }
    });
    
    let result = [];
    for(let i = 0; i < 5; i++){
        if(vals[i] === '') result.push(<LetterBox state = {0} letter = {vals[i]} />);
        else result.push(<LetterBox state = {4} letter = {vals[i]} />);
    }
    return (
        <div className = "row">
            {result}
        </div>
    );

}