import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import STORE from './STORE'
import Folder from './Components/Folder'
import Header from './Components/Header'
import Main from './Components/Main'
import './App.css'

class App extends React.Component{
    state = {
        STORE
    }
    
    render(){    
        return(
            <div className="App">
                <Route
                    path="/"
                    component={Header}
                />
                <Route 
                        exact path="/"
                        render={() => <div className="navFlex">
                        <Folder
                        STORE={this.state.STORE}
                        />
                        <Main STORE={this.state.STORE}/>
                        </div>}
                />
                <Route 
                        exact path="/folder/:folderId"
                        render={() => <div className="navFlex">
                        <Folder
                        STORE={this.state.STORE}
                        />
                        <Main STORE={this.state.STORE}/>
                        </div>}
                />
                </div>
        )
    }
}

export default withRouter(App) 