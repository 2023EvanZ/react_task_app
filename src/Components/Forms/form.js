import React from 'react';

export const Form = ({ userInput, onFormChange, onFormSubmit }) => {

    const handleChange = (event) => {
        onFormChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' required value={userInput} onChange={handleChange} style={{borderRadius: "10px"}}></input>
                <input type='submit' style={{borderRadius: "10px"}}></input>
            </form>
        </>
    )
}