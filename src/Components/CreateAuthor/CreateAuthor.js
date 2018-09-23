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

        let form = {}
        form[event.target.name] = event.target.value
        console.log(form)

        this.setState({
            author:form
        })
        // event.preventDefault()
        // console.log(event.target.name)

        // let form = {}

        // form[event.target.name] = event.target.value

        // // for(let key in this.state.author){
        // //     form[key] = this.state.author[key]
        // // }
        // console.log(form)
        // this.setState({
        //     author:form
        // })
        // let field = event.target.name
        // let value = event.target.value
        // // this.state.author[field] = value
        // let authorForm = {}
        // authorForm[field] = value
        // // console.log(authorForm)

        //  this.setState({
        //     author:authorForm
        // })
        // console.log(this.state)
        
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