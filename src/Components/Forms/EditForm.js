import React from 'react';

export const EditForm = ({ userInput, onFormChange, onFormSubmit }) => {

    const handleChange = (event) => {
        onFormChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit()
    }

    return (
        <>
            <h4>Type in an edit to original task:</h4>
            <form onSubmit={handleSubmit}>
                <input type='text' required value={userInput} onChange={handleChange} style={{borderRadius: "10px"}}></input>
                <input type='submit' style={{borderRadius: "10px"}}></input>
            </form>
        </>
    )
}