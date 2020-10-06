import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import NotefulContext from '../Context/NotefulContext'


class Main extends React.Component {
    static contextType = NotefulContext

    static defaultProps = {
        onDeleteNote: () => {},
      }

   render() { 
    const folderID = this.props.match.params.folderId

    let notes = []

    if (folderID === undefined){
        notes = this.context.notes
    } else {
        notes = this.context.notes.filter(note => {
            return (folderID === note.folderId)
        })
    }

    const path = this.props.location.pathname


    const note = notes.map(note => {
        return (
            <div className="noteSelection" key={note.id}>
                    <li>
                        <Link to={`/note/${note.id}`}>
                            <h1>{note.name}</h1>
                        </Link>
                        <p>Last modified: {note.modified}</p>
                        <button type="button" onClick={() => this.context.deleteNote(note.id, path)}>Delete</button>
                    </li>
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
}

export default withRouter(Main)