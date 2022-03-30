import React from "react"

const BLOCK_STYLE = {height: "25px", width: "25px", margin: "1px"}
const GREY_STYLE = {backgroundColor: "grey", ...BLOCK_STYLE}

export default function GameBoard(props) {
    console.log('XXX', props.guesses)

    return <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }}>
        <div>
            {props.guesses.map((guess,i) => {
                return <div key={i} style={{display:"flex"}}>
                    {guess.characters.map((char, i) => {
                        return <div key={`${char}-${i}`} style={{backgroundColor: guess.colors[i], textAlign: "center", ...BLOCK_STYLE}}>
                            {char}
                        </div>
                    })}
                </div>
            })}
            {props.guesses.length < 6 && 
                <div style={{display:"flex"}}>
                    {props.characters.map((char,i) => {
                        return <div key={`${char}-${i}`}style={{textAlign: "center", ...GREY_STYLE}}>{char}</div>
                    })}
                    <RowBlocks numBlocks={5 - props.characters.length} />
                </div>
            }
            <EmptyRows rowLength={5 - props.guesses.length}/>
        </div>
    </div>
    
}

function RowBlocks(props) {
    let blocks = []
    for(let i=0; i<props.numBlocks; i++){
        blocks.push(<div key={i} style={GREY_STYLE}></div>)
    }
    return blocks
}

function EmptyRows(props) {
    let rowsOfBlocks = []
    for (let i=0; i<props.rowLength; i++){
        rowsOfBlocks.push(<div key={i} style={{display:"flex"}}>
            <RowBlocks numBlocks={5} />
        </div>)
    }
    return rowsOfBlocks
}
