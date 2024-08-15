export interface WordProps{
    word: string;
}
export interface AlertProps{
    showing: boolean;
    message: string;
}
export interface NotifProps {
    props: AlertProps;
    setProps: (props: AlertProps) => void;
}
export interface KeyboardProps {
    states: number[];
}
export interface CurrentProps {
    vals: string[];
    setVals: (vals: string[]) => void;
}
export interface GuessesProps {
    word: string;
    guess: string;
}
export interface RemainingWordsProps {
    remainingWords: string[];
    bestGuess: string;
}