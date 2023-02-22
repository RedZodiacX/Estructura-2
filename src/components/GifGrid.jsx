import { useEffect, useState } from "react"

const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ieOpTYUBAHJbsRfDGA7IF3o18WbrW7ii&q=${category}&limit=25&offset=0&rating=g&lang=en`
    const resp = await fetch (url)
    const { data } = await resp.json()
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
}

export const GifGrid = ({category,key} ) => {
    useEffect(() =>{
        console.log(category)
    }, [])
    
    return(
        <>
            <h3> {category} </h3>
        </>
    )
}