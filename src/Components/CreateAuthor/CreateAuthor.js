import React, { Component } from 'react'

import AuthorForm from '../../Views/AuthorForm/AuthorForm'

export class CreateAuthor extends Component {

    state = {
        author:{
            id:'',
            firstName:'',
            lastName:''
        }
    }

    handleForm = (event) => {
        let value = event.target.value
        let field = event.target.name

        let form = { ...this.state.author }
        form[field] = value

        console.log(form)
        this.setState({
            author:form
        })
        // console.log(this.state.author)
       
        
    }

    render() {
        return (    
            <div>
                <AuthorForm author={this.state.author} clicked={(event) => this.handleForm(event)} />
            </div>
        )
    }
}

export default CreateAuthor;