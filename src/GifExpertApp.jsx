import {useState} from 'react';
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['One Punch'] );
 
    const onAddCategory = ( newCategory) => {
        if ( !categories.includes(newCategory) )
            setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            {/* Titulo de aplicacion */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                //setCategories = { setCategories }
                onNewCategory = { event => onAddCategory(event) }
            />
            
            {/* Listado de Gif */}
            {
                categories.map( category => (
                    <GifGrid key = {category} 
                             category = {category} /> ))
                    //return <li key = {category}> {category} </li>
                    /*{return (
                        <div key = {category}>
                                <li> {category} </li>
                        </div>
                    )}
                    (
                        <div key = {category}>
                                <li> {category} </li>
                        </div>
                    )*/
                //)
            }   
        </>
    )
}
