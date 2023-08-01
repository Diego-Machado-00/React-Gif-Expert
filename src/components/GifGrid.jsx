import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  
  /*
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }
    

    useEffect( () => {
      getGifs(category).
            then(newImage => setImages(newImage));
        getImages();
    }, [])
  */

    return (
    <>
        <h3> { category} </h3>
        {
          //isLoading ? (<h2> Cargando.... </h2>) : null
          isLoading && (<h2> Cargando.... </h2>)
        }

        <div className='card-grid'>
          {
            images.map( (image)  => 
              ( 
                <GifGridItem 
                    key = {image.id}
                    { ...image }
                />
              )
            )
          }
        </div>
    </>
  )
}
