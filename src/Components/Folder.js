import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Folder extends React.Component {
    //match current id to folder id to class highlight
    render(){

        let folderID = this.props.match.params.folderId

        const folderNames = this.props.folders.map(folder => {
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
        </div>
    )
    }
}

export default withRouter(Folder)