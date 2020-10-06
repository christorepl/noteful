import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import NotefulContext from '../Context/NotefulContext'

class Folder extends React.Component {
    static contextType = NotefulContext
    render(){

        let folderID = this.props.match.params.folderId

        const folderNames = this.context.folders.map(folder => {
            return (
                <div key={folder.id}>
                <Link to={`/folder/${folder.id}`}>
                    <p className={`navBarTile ${folder.id === folderID ? 'highlight' : null}`}>
                    {folder.name}
                    </p>
                </Link>
                </div>
            )
        })

    return(
        <div>
            {folderNames}
            <button type="button">Add folder</button>
        </div>
    )
    }
}

export default withRouter(Folder)