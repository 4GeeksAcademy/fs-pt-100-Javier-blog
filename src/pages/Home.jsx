import { useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { PokemonCard } from "../components/pokemonCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ModalExample } from "../components/modal.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [modalShow, setModalShow] = useState(false)
	return (
		<div className="text-center mt-5">

		<button onClick={()=>setModalShow(!modalShow)}>{modalShow? 'hide modal' : 'show modal'}</button>

		{modalShow && <ModalExample show={modalShow} hide={setModalShow}/>}

			<div className="row">

			{store.pokemons?.results?.map((el,i) => <PokemonCard key={i} name={el.name} url={el.url} />)}
			</div>

		</div>
	);
}; 