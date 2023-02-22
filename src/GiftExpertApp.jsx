import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState (['first category'])
    //const [category, setCategory] = useState ([''])

    const onAddCategory = (category) => {
        setCategories( list => [...list, category])
        //setCategory('')
    }

    /*const onSetCategory = (evt) => {
        setCategory(evt.target.value)
    }*/

    return ( 
        <>
            <h1>GiftExpert</h1>
            <AddCategory onAddCategory={onAddCategory}/>
            {/* <input type="text" value = {category} onChange={(event) => onSetCategory(event)} />
            <button onClick={() => onAddCategory()}> Add Category </button> */}
            <ol>
                
                {
                    categories.map(
                    (category, key) => 
                    {
                        return <GifGrid category={category} key = {key} />
                    }
                    )
                }
            </ol>
        </>
    )
}