import React from 'react'
import { withRouter } from 'react-router-dom'
import NotefulContext from '../Context/NotefulContext'

class AddNewFolder extends React.Component {
    static contextType = NotefulContext

    static defaultProps = {
        addFolder: () => {},
    }

    render() {
        return (
            <form className="form" onSubmit={(e) => this.context.addFolder(e)}>
            <label htmlFor="folderName">New Folder Name: </label> <br/>
                <input type="text" className="folderName" name="folderName" id="folderName" ref={this.folderName}/> <br/>
                <button type="submit" className="submit">
                    Add folder
                </button>
            </form>
        )
    }
}

export default withRouter(AddNewFolder)