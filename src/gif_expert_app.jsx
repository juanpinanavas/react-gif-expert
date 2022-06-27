import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'One Punch' ])

  const onAddCategory = (category) => {
    if (categories.includes(category)) return
    setCategories(categories => [category, ...categories])
  }
  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onAddCategory={onAddCategory} />
      {
        categories.map(category => <GifGrid key={category} category={category}/>)
      }
    </>
  )
}
