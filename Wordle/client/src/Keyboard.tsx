import React from 'react';
import {KeyboardProps} from './props';

export default function Keyboard({states}: KeyboardProps){
    return (
        <div>
            <div className = "KeyboardRow">
                <KeyboardKey letter = "Q" state = {states[16]}/>
                <KeyboardKey letter = "W" state = {states[22]}/>
                <KeyboardKey letter = "E" state = {states[4]}/>
                <KeyboardKey letter = "R" state = {states[17]}/>
                <KeyboardKey letter = "T" state = {states[19]}/>
                <KeyboardKey letter = "Y" state = {states[24]}/>
                <KeyboardKey letter = "U" state = {states[20]}/>
                <KeyboardKey letter = "I" state = {states[8]}/>
                <KeyboardKey letter = "O" state = {states[14]}/>
                <KeyboardKey letter = "P" state = {states[15]}/>
            </div>
            <div className = "KeyboardRow">
                <KeyboardKey letter = "A" state = {states[0]}/>
                <KeyboardKey letter = "S" state = {states[18]}/>
                <KeyboardKey letter = "D" state = {states[3]}/>
                <KeyboardKey letter = "F" state = {states[5]}/>
                <KeyboardKey letter = "G" state = {states[6]}/>
                <KeyboardKey letter = "H" state = {states[7]}/>
                <KeyboardKey letter = "J" state = {states[9]}/>
                <KeyboardKey letter = "K" state = {states[10]}/>
                <KeyboardKey letter = "L" state = {states[11]}/>
            </div>
            <div className = "KeyboardRow">
                <KeyboardKey letter = "Z" state = {states[25]}/>
                <KeyboardKey letter = "X" state = {states[23]}/>
                <KeyboardKey letter = "C" state = {states[2]}/>
                <KeyboardKey letter = "V" state = {states[21]}/>
                <KeyboardKey letter = "B" state = {states[1]}/>
                <KeyboardKey letter = "N" state = {states[13]}/>
                <KeyboardKey letter = "M" state = {states[12]}/>
            </div>
        </div>
    );
}
export function KeyboardKey({letter, state}: {letter: string, state: number}){
    if(state === 0){
        return (
            <div className = 'keyboardKey'>
                {letter}
            </div>
        );
    }else if(state === 1){
        return (
            <div className = 'keyboardKey keyboardKeyCorrect'>
                {letter}
            </div>
        );
    }else if(state === 2){
        return (
            <div className = 'keyboardKey keyboardKeyMisplaced'>
                {letter}
            </div>
        );
    }else{
        return (
            <div className = 'keyboardKey keyboardKeyIncorrect'>
                {letter}
            </div>
        );
    }
}