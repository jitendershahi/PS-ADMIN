import React from 'react'

import './AuthorForm.css'

import Input from '../Input/Input'

export const AuthorForm = (props) => {

        return (
            <form>
                <h1>Manage Authors</h1>
                <Input name="firstName"
                 label="FirstName"
                 placeholder="First Name"
                 value={props.author.firstName}
                 click={props.clicked}/>
                {/* <label htmlFor="firstName">First Name</label>
                <input type="text"
                 name="firstName"
                 className="form-control input" 
                 placeholder="First Name" 
                 value={props.author.firstName}
                 onChange={props.clicked} /> */}

                <label htmlFor="lastName">Last Name</label>
                <input type="text"
                 name="lastName"
                 className="form-control input"
                  placeholder="Last Name"
                 value={props.author.lastName}
                 onChange={props.clicked} />

                <input type="submit" value="Save" className="btn btn-danger"/>
            </form>
        )
 
}

export default AuthorForm;