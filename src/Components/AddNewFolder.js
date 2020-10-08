import React from 'react'
import { withRouter } from 'react-router-dom'
import NotefulContext from '../Context/NotefulContext'
import FoldersError from '../ErrorBoundaries/FoldersError'

class AddNewFolder extends React.Component {
    static contextType = NotefulContext

    static defaultProps = {
        addNewFolder: () => {},
    }

    render() {
        return (
            <FoldersError>
                <form className="form" onSubmit={(e) => this.context.addNewFolder(e)}>
                <label htmlFor="folderName">New Folder Name: </label> <br/>
                    <input type="text" className="folderName" name="folderName" id="folderName" required/> <br/>
                    <button type="submit" className="submit">
                        Add folder
                    </button>
                </form>
            </FoldersError>
        )
    }
}

export default withRouter(AddNewFolder)