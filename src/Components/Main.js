import React from 'react'
import { withRouter } from 'react-router-dom'

const Main = (props) => {

    let folderID = props.match.params.folderId

    let notes = []

    if (folderID === undefined){
        notes = props.notes
    } else {
        notes = props.notes.filter(note => {
            return (folderID === note.folderId)
        })
    }

    const note = notes.map(note => {
        return (
            <div className="noteSelection" key={note.id}>
                <li>
                    <h1>{note.name}</h1>
                    <p>Last modified: {note.modified}</p>
                    <button type="button">Don't click me yet</button>
                </li>
            </div>
        )
    })

    return(
        <div>{note}</div>
    )
}

//folderId = null, then render all notes
export default withRouter(Main)