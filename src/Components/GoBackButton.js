import React from 'react'
import { Link, withRouter } from 'react-router-dom'


class MainNote extends React.Component {
    render(){
        let noteID = this.props.match.params.noteId
        const selectedNote = this.props.notes.find(note => note.id === noteID)
        const selectedFolder = this.props.folders.find(folder => folder.id === selectedNote.folderId)
        const selectedFolderName = selectedFolder.name

        return(
            <div>
                <Link to="">
                    <p className="navBarTile" onClick={() => this.props.history.goBack()}>Go Back</p>
                </Link>
                <p>{selectedFolderName}</p>
            </div>
        )
    }
}

export default withRouter(MainNote)