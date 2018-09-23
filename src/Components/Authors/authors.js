import React ,{ Component } from 'react'

import AuthorApi from '../../api/authorApi'
import AuthorList from '../../Views/AuthorList/authorlist'

import { Link } from 'react-router-dom'

export class Authors extends Component {
    state = {
        authors:[]
    }

    componentWillMount() {
        this.setState({
            authors: AuthorApi.getAllAuthors()
        })
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>

                <Link className="btn btn-danger" type="button" to="/author/create">Manage Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        )
    }
}

export default Authors;