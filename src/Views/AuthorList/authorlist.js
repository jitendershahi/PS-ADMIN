import React from 'react'

import PropTypes from 'prop-types'

export const AuthorList = (props) => {

    return (
        <div>
            <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.authors.map((el, index) => {
                            return <tr key={el.id}><td>{index + 1}</td><td>{el.firstName} {el.lastName}</td></tr>
                        })}
                    </tbody>
            </table>
        </div>
    )
}

AuthorList.propTypes = {
    authors:PropTypes.array.isRequired
}

export default AuthorList;