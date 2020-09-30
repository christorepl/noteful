import React from 'react'
import { withRouter } from 'react-router-dom'


class MainNote extends React.Component {

    render(){
        const noteId = this.props.match.params.noteId
        const selectedNote = this.props.notes.find(note => note.id === noteId)

        return(
            <div className="noteSelection" key={selectedNote.id}>
                    <li>
                        <h1>{selectedNote.name}</h1>
                        <p>Last modified: {selectedNote.modified}</p>
                        <p>{selectedNote.content}</p>
                        <button type="button">Don't click me yet</button>
                    </li>
            </div>
        )
    }
}

export default withRouter(MainNote)