import {useState} from 'react'

export function AddCategory({ onNewCategory }) {

    const [inputValue , setInputvalue] = useState('');

    const onInputChanged = (event) => {
        setInputvalue(event.target.value);   
    }

    const onSubmit = (event) => {
       event.preventDefault();

       if( inputValue !== undefined){
            if( inputValue.trim().length <= 1 ) return; 
            //setCategories( categories => [ inputValue, ...categories] );
            onNewCategory( inputValue.trim() );
            setInputvalue('');
       }
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input  type="text" 
                    placeholder="Buscar gifs" 
                    value={inputValue}
                    onChange={ (event) => onInputChanged(event)}
            />
        </form>
    )
}
