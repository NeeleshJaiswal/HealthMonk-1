import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogGreet from './BlogGreet';
import BlogDetailPage from './BlogDetailPage';
function Blog() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={BlogGreet}/>
                <Route exact path='/blog/:id' component={BlogDetailPage}/>
            </Switch>
        </Router>
    )
}

export default Blog
