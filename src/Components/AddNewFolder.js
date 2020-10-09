import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import NotefulContext from '../Context/NotefulContext'
import FoldersErrors from '../ErrorBoundaries/FoldersErrors'

class AddNewFolder extends React.Component {
    static contextType = NotefulContext

    static defaultProps = {
        addNewFolder: () => {},
    }

    render() {
        return (
            <FoldersErrors>
                <form className="form" onSubmit={(e) => this.context.addNewFolder(e)}>
                <label htmlFor="folderName">New Folder Name: </label> <br/>
                    <input type="text" className="folderName" name="folderName" id="folderName" required/> <br/>
                    <button type="submit" className="submit">
                        Add folder
                    </button>
                </form>
            </FoldersErrors>
        )
    }
}

AddNewFolder.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
}


export default withRouter(AddNewFolder)