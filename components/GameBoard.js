import React from "react"

export default function GameBoard(props) {
    return <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }}>
        {props.characters}
    </div>
}