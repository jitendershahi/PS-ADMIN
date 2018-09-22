import React ,{ Component } from 'react'

import AuthorApi from '../../api/authorApi'

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
        console.log(AuthorApi.getAllAuthors())
        return (
            <div>
                <h1>Authors</h1>

                <table className="table">
                  <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.state.authors.map((el) => {
                          return <tr key={el.id}><td>{el.id}</td><td>{el.firstName} {el.lastName}</td></tr>
                      })}
                  </tbody>
                </table>
            </div>
        )
    }
}

export default Authors;