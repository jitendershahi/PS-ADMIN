import React, { Component } from 'react'

import AuthorForm from '../../Views/AuthorForm/AuthorForm'

import AuthorApi from '../../api/authorApi'

import toastr from 'toastr'

export class CreateAuthor extends Component {

    state = {
        author:{
            id:'',
            firstName:'',
            lastName:''
        },
        error:{}
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
    
    isAuthorFormValid = () => {
        let isValid = true

        let errorForm = { ...this.state.error}

        if(this.state.author.firstName.length < 3){
            isValid = false
            errorForm.firstName = "Please enter altleast 4 character"
        }

        if(this.state.author.lastName.length < 3){
            isValid = false
            errorForm.lastName = "Please enter altleast 4 character"
        }
        this.setState({error: errorForm})
        return isValid
    }

    saveAuthor = (event) => {
        event.preventDefault()
        if(!this.isAuthorFormValid()){
            return
        }
        AuthorApi.saveAuthor(this.state.author)
        toastr.success("Author Saved!!")
        this.props.history.push('/authors')
        console.log(this.props)
    }

    render() {
        return (    
            <div>
                <AuthorForm author={this.state.author} 
                clicked={(event) => this.handleForm(event)} 
                error={this.state.error}/>
            </div>
        )
    }
}

export default CreateAuthor;