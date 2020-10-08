import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import NotefulContext from '../Context/NotefulContext'
import AddNewFolder from './AddNewFolder'

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
            <AddNewFolder />
        </div>
    )
    }
}

export default withRouter(Folder)