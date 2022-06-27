import { useFetchGifs } from '../hooks/use_fetch_gifs'
import { GifGridItem } from './gif_grid_item'


export const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2>Cargando...</h2>
      }
      <div className="card-grid">
      {
        images.map((image) => (
          <GifGridItem key={image.id} {...image}/>
        ))
      }
      </div>
    </>
  )
}
