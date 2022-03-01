import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import GameBoard from "../components/GameBoard"
import Keyboard from "../components/Keyboard"
import useTophersData from "./data";

export default function Home() {
  const {
    charactersTypedByUser,
    characterEntered,
    deleteChar,
    submit
  } = useTophersData();

  return <div style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "between"
  }}>
    <NavBar />
    <GameBoard characters={charactersTypedByUser} />
    <Keyboard submit={submit} deleteChar={deleteChar} characterEntered={characterEntered}/>
  </div>
}
