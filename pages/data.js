import React, {useState} from "react"


export default function useTophersData() {
    const [chars, setChars] = useState([])
   

    return {
        deleteChar: function deleteChar(){
            console.log("I am deleting a character")
        },
        characterEntered: (newChar) => {
            setChars(currCharacters => [...currCharacters, newChar])
        },
        charactersTypedByUser: chars
    }
}

const userStory1 = "As a user I can type and see it on the screen."
const userStory2 = "I can use backspace to remove typed characters"

