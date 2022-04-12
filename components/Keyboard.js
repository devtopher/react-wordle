import React, { useEffect } from "react"
let allowableChars = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
88, 89, 90]
export default function Keyboard(props) {
   
    useEffect(()=> {
      function handler(e){
        if (e.which == 8){
          props.deleteChar()
          
        } else if(e.which == 13){
          props.submit()
          
        } else if (allowableChars.includes(e.which)){
          const character = String.fromCharCode(e.which)
          props.characterEntered(character.toLowerCase())
        }
      }
      window.addEventListener("keyup", handler)
      return () => window.removeEventListener("keyup", handler)
    }, [props.submit])

    return <div>
      {props.characters}
    </div>
}