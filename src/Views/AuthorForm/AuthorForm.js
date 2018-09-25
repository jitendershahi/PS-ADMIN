import React from 'react'

import './AuthorForm.css'

import Input from '../Input/Input'
import { PropTypes } from 'prop-types'

// import { PropsTypes } from 'prop-types'

export const AuthorForm = (props) => {

        return (


            <form>
                <h1>Manage Authors</h1>
                <Input name="firstName"
                    label="FirstName"
                    placeholder="First Name"
                    value={props.author.firstName}
                    click={props.clicked}
                    error={props.error.firstName}/>
                {/* <label htmlFor="firstName">First Name</label>
                <input type="text"
                 name="firstName"
                 className="form-control input" 
                 placeholder="First Name" 
                 value={props.author.firstName}
                 onChange={props.clicked} /> */}

                    <Input name="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    value={props.author.lastName}
                    click={props.clicked}
                    error={props.error.lastName}/>
                {/* <label htmlFor="lastName">Last Name</label>
                <input type="text"
                 name="lastName"
                 className="form-control input"
                  placeholder="Last Name"
                 value={props.author.lastName}
                 onChange={props.clicked} /> */}

                <input type="submit" value="Save" className="btn btn-danger" onClick={props.saveas}/>
            </form>
        )
 
}

AuthorForm.prototypes = {
    author:PropTypes.object.isRequired,
    saveas:PropTypes.func.isRequired,
    clicked:PropTypes.func.isRequired,
    error:PropTypes.object
}

export default AuthorForm;