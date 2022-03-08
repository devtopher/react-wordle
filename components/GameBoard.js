import React from "react"

// const guesses = [{ chars, colors }, {chars, colors}]


export default function GameBoard(props) {
    console.log('XXX', props.guesses)

    return <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }}>
        
        <div>
            {props.guesses.map(guess => {
                return <div style={{display:"flex"}}>
                    {guess.chars.map((char, i) => {
                        return <div style={{backgroundColor: guess.colors[i], width: '25px', textAlign: "center"}}>
                            {char}
                        </div>
                    })}
                </div>
            
            })}
            <div style={{display:"flex"}}>{props.characters.map(char => {
            return <div style={{textAlign: "center", backgroundColor: "grey", width: '25px'}}>{char}</div>
        })}</div>
             
        
        </div>
        
       
    </div>
    
}

