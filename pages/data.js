import React, {useState} from "react"



export default function useTophersData() {
    const [chars, setChars] = useState([])
   

    return {
        submit: function submit(){console.log("submitted")},
        deleteChar: function deleteChar(){
            setChars(currCharacters => {
                const newArray = [...currCharacters]
                newArray.pop()
                return newArray
            }) 
        },
        characterEntered: (newChar) => {
            // if (currCharacters === 5){return null}
            setChars(currCharacters => {
                if (currCharacters.length >= 5){return currCharacters}
                return [...currCharacters, newChar]
            })
        },
        charactersTypedByUser: chars
    }
}

const userStory1 = "As a user I can type and see it on the screen.✅"
const userStory2 = "I can use backspace to remove typed characters✅"
const userStory3 = "I can only type 5 letters at a time✅"
const userStory4 = "I can submit my 5 letter word"

