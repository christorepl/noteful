import React from 'react'
import { withRouter } from 'react-router-dom'

const Main = (props) => {

    let folderID = props.match.params.folderId
    console.log(folderID)

    let notes = []

    if (folderID === undefined){
        console.log('empty array')
        notes = props.STORE.notes
    } else {
        console.log('pop array')
        notes = props.STORE.notes.filter(note => {
            return (folderID === note.folderId)
        })
    }

    console.log(notes)

    return(
        //map over notes
        <div className="noteSelection">
            <li>
                <h1>Note x</h1>
                <p>modified date</p>
                <button type="button">Don't Click Me Yet</button>
            </li>
        </div>
    )
}


//folderId = null, then render all notes
export default withRouter(Main)