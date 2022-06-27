import { useState, useEffect } from "react"
import { getGifs } from "../helpers/get_gifs"

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getImages(category)
  }, [])

  const getImages = async () => {
    const images = await getGifs(category)
    setImages(images)
    setIsLoading(false)
  }

  return {
    images,
    isLoading,
  }
}
