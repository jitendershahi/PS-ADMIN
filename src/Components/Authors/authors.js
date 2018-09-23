import React ,{ Component } from 'react'

import AuthorApi from '../../api/authorApi'
import AuthorList from '../../Views/AuthorList/authorlist'

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

                <AuthorList authors={this.state.authors} />
            </div>
        )
    }
}

export default Authors;