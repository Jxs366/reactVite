import React from 'react'
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"
export function App(){
    return(
        <>
            <TwitterFollowCard userName="@jxs366_" name="Jose Guillermo" />
            <TwitterFollowCard userName="@yoquese" name="Pepe Toño" />
        </>
    )
}