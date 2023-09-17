import React from 'react'
import ListOfVideos from './ListOfVideos'
import NewVideo from "./NewVideo"

export function App() {
    return (
        <div>
            <ListOfVideos/>
            <NewVideo/>
            <h1>Does this work?</h1>
        </div>
    )
}