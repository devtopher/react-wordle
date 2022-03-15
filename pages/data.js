import React, {useState} from "react"

export default function useTophersData() {
    const [chars, setChars] = useState([])
    const [guesses, setGuesses] = useState([])
    const [answer, setAnswer] = useState("color".split(""))
    
    return {
        submit: function submit(){
            if (chars.length === 5){
                let colors = []
                for (let i = 0; i < chars.length; i++) {
                    if (chars[i] == answer[i]) {
                        colors.push("green");
                    } else if (answer.includes(chars[i])) {
                        colors.push("yellow");
                    } else {
                        colors.push("grey");
                    }
                }
     
                setGuesses([
                    ...guesses,
                    {
                        characters: chars,
                        colors
                    }
                ])
                setChars([])}
            
        },
        deleteChar: function deleteChar(){
            setChars(currCharacters => {
                const newArray = [...currCharacters]
                newArray.pop()
                return newArray
            }) 
        },
        characterEntered: (newChar) => {
            setChars(currCharacters => {
                if (currCharacters.length >= 5){return currCharacters}
                return [...currCharacters, newChar]
            })
        },
        charactersTypedByUser: chars,
        guesses
    }
}

// const userStory1 = "As a user I can type and see it on the screen.✅"
// const userStory2 = "I can use backspace to remove typed characters✅"
// const userStory3 = "I can only type 5 letters at a time✅"
// const userStory4 = "I can submit my 5 letter word✅"
// const userStory5 = "When I submit, my word is locked in place"
// const userStory5.5 = "When I submit, my word is evaluated to be in the list or not"
// const userStory6 = "When I submit, my word is compared to the word"
// const userStory7 = "When my word is compared, letters that are in the word and in the correct place change to green"
// const userStory8 = "When my word is compared, letters that are in the word and not in the correct place change to yellow"
// const userStory8 = "When my word is compared, letters that are not in the word change to grey"
// const userStory10 = "When my word is compared, if it is correct, I win and get a module"
// const userStory9 = "When the above happens, the letters also change on the visual keyboard"
// const userStory10 = "Once my word has been evaluated and the colors are updated, I can type on a new line a new guess"
// const userStory10 = "If I submit 6 times, I lose"
// const userStory10 = "When I submit, my word is locked in place"
// const userStory10 = "When I submit, my word is locked in place"
// const userStory10 = "When I submit, my word is locked in place"

