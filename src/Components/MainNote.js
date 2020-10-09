import React from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link, Route } from 'react-router-dom'
import NotefulContext from '../Context/NotefulContext'

class MainNote extends React.Component {
    static contextType = NotefulContext

    static defaultProps = {
        onDeleteNote: () => {},
      }

    render(){
        console.log(this.props)
        MainNote.propTypes = {
            route: React.PropTypes.instanceOf(Route).isRequired
        }

        const noteId = this.props.match.params.noteId
        const selectedNote = this.context.notes.find(note => note.id === noteId)
   
        return(
            <div className="noteSelection" key={selectedNote.id}>
                    <li>
                        <h1>{selectedNote.name}</h1>
                        <p>Last modified: {selectedNote.modified}</p>
                        <p>{selectedNote.content}</p>
                        <Link to ="/">
                            <button type="button" onClick={() => this.context.deleteNote(selectedNote.id)}>Delete</button>
                        </Link>
                    </li>
            </div>
        )
    }
}

export default withRouter(MainNote)