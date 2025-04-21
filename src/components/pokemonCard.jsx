import { useState } from "react"
import { Link } from "react-router-dom"
import { ModalExample } from "./modal"
import PropTypes from "prop-types"

export const PokemonCard = ({ name, url }) => {
    let aux = url.split('/') //separamos el texto en todos los lugares donde este el /
    let id = aux[6] //en la posicion 6 del array de aux esta el id
    const [modalShow, setModalShow] = useState(false)



    const handleFav = () => {
        console.log('click on fav')
    }

    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={name} />
                <h3>{name}</h3>
                <Link to={'/details/'+id}
                    className=" btn btn-primary"
                >
                    Learn more
                </Link>
                {modalShow && <ModalExample show={modalShow} hide={setModalShow} name={name}/>}

                <button onClick={()=>setModalShow(!modalShow)}>{modalShow? 'hide modal' : 'show modal'}</button>

                <button onClick={handleFav}>{'<3'}</button>
            </div>
        </div>
    )
}