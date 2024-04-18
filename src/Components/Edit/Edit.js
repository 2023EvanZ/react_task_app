import React, { useState, useEffect } from 'react';
import { EditForm } from '../Forms/EditForm';
import { useNavigate } from 'react-router-dom';


export const Edit = ({ id }) => {
    const [ editTodo, setEditTodo ] = useState('')
    const navigate = useNavigate()

    const handleFormChange = (inputValue) => {
        setEditTodo(inputValue)
    }

    const handleFormSubmit = () => {
        fetch(`/api/edit/${id}`, {
            method: 'POST',
            body: JSON.stringify({
                id: id, 
                content: editTodo
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
        .then(message => {
            //console.log(message)
            setEditTodo('')
            getLatestTodos()
            navigate('/')
        })
    }

    const getLatestTodos = () => {
        fetch(`/api/edit/${id}`).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => setEditTodo(data))
    }

    return (
        <>
            <EditForm userInput={editTodo} onFormChange={ handleFormChange } onFormSubmit={ handleFormSubmit }/>
        </>
    )
}