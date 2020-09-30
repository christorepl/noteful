import React from 'react'
import { Link, withRouter } from 'react-router-dom'

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
                <Link to={`/note/${note.id}`}>
                    <li>
                        <h1>{note.name}</h1>
                        <p>Last modified: {note.modified}</p>
                        <button type="button">Don't click me yet</button>
                    </li>
                </Link>
            </div>
        )
    })

    return(
        <div>
        {note}
        <button type="button">Add note</button>
        </div>
    )
}

export default withRouter(Main)