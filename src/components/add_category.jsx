import React, { useState } from 'react'

export const AddCategory = ({onAddCategory}) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length === 0) return
    onAddCategory(inputValue.trim())
    setInputValue('')
  }
  return (
    <form onSubmit={onSubmit}>
      <input 
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
