import React from 'react'
import { withRouter } from 'react-router-dom'
import NotefulContext from '../Context/NotefulContext'



class MainNote extends React.Component {
    static contextType = NotefulContext

    static defaultProps = {
        onDeleteNote: () => {},
      }


    render(){
        const noteId = this.props.match.params.noteId
        const selectedNote = this.context.notes.find(note => note.id === noteId)
        const path = this.props.location.pathname
    

        return(
            <div className="noteSelection" key={selectedNote.id}>
                    <li>
                        <h1>{selectedNote.name}</h1>
                        <p>Last modified: {selectedNote.modified}</p>
                        <p>{selectedNote.content}</p>
                        <button type="button" onClick={() => this.context.deleteNote(selectedNote.id, path)}>Delete</button>
                    </li>
            </div>
        )
    }
}

export default withRouter(MainNote)