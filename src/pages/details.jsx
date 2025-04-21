import { useEffect } from "react"
import { useParams } from "react-router-dom"
import pokeApiServices from "../services/pokeApiService"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const Details = () => {

    const {id} = useParams()
    const {store, dispatch} = useGlobalReducer()


    const getdetails = async () => {
        const resp = await pokeApiServices.getOne(id)
        dispatch({type: 'pokemon_details', payload: resp})
    }

    useEffect(()=>{
        getdetails()
    },[])


    return (

        <div>
            <h3>Details for {store.details?.name}</h3>
            <p>weight: {store.details?.weight}</p>
        </div>
    )
}