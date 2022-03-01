import React, { useEffect } from "react"

export default function Keyboard(props) {
   
    useEffect(()=> {
      function handler(e){
        if (e.which == 8){
          props.deleteChar()
          
        } else if(e.which == 13){
          props.submit()
        } else if (e.which !==0 ){
          const character = String.fromCharCode(e.which)
          props.characterEntered(character)
        }
      }
      window.addEventListener("keyup", handler)
      return () => window.removeEventListener("keyup", handler)
    }, [])

    return <div>

    </div>
}