import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './index.css'
import Nav from './components/Nav'
import Posts from './components/Posts'

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <Nav/>

                    <Switch>
                        <Route 
                            exact
                            path="/"
                            render={() => <Posts type="top"/>}
                        />

                        <Route 
                            exact
                            path="/new"
                            render={() => <Posts type="new"/>}
                        />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>, 
    document.getElementById('app')
)