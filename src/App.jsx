import React from 'react'
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"
import { Saludo } from './Saludo.jsx'
export function App(){
    return(
        <>
            <Saludo/>
            <TwitterFollowCard userName="PostMalone" name="Post Malone" />
            <TwitterFollowCard userName="elonmusk" name="Elon Musk" />
            <TwitterFollowCard userName="theweeknd" name="Abel Tesfaye" />
            <TwitterFollowCard userName="kendricklamar" name="Kendrick Lamar" />
            <TwitterFollowCard userName="trvisXX" name="TRAVIS SCOTT" />

        </>
    )
}