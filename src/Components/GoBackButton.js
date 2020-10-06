import React from 'react'
import { withRouter } from 'react-router-dom'
import NotefulContext from '../Context/NotefulContext'


class MainNote extends React.Component {
    static contextType = NotefulContext

    render(){
        let noteID = this.props.match.params.noteId
        const selectedNote = this.context.notes.find(note => note.id === noteID)
        const selectedFolder = this.context.folders.find(folder => folder.id === selectedNote.folderId)
        const selectedFolderName = selectedFolder.name

        return(
            <div>
                <p className="navBarTile" onClick={() => this.props.history.goBack()}>Go Back</p>
                <p>{selectedFolderName}</p>
            </div>
        )
    }
}

export default withRouter(MainNote)