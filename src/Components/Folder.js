import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Folder extends React.Component {
    //match current id to folder id to class highlight
    render(){

        let folderID = this.props.match.params.folderId
        console.log(folderID)

        const folderNames = this.props.STORE.folders.map(folder => { console.log(folder)
            return (
                <div>
                <Link to={`/folder/${folder.id}`}>
                    <p className="navBarTile" key={folder.id}>
                        {folder.name}
                    </p>
                </Link>
                </div>
            )
        })
    return(
        <div>{folderNames}</div>
    )
    }
}

export default withRouter(Folder)