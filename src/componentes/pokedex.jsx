import { useState, useEffect} from "react"

export default function Pokedex(){
 const [id, setId] = useState(1)
const [Pokemon, setPokemon] = useState(null)

const fetchData = async () => { //funcao assincronia para encontrar dados e conectar na API
     try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
       //crase = template string, utilizado para strings que vão mudar de valor no decorrer da renderização
      const data = await response.json();
      setPokemon(data);
  }catch(error){
    console.error('erro: ', error);
  }
}
 useEffect(() =>{
    fetchData()
 }, [id])
 
 const nextPokemon = () =>{
    setId(id = 1)
 }
 
 return(
 
        <div>
            {Pokemon && (
        
            <div className="Pokemon">
            <h1>Pokémon</h1>
            <p>{Pokemon.name}</p>
            <p>Peso: {Pokemon.weight}g</p>
            <img src={Pokemon.sprites.front_default} alt="Pokemon"/>
      
    <button onClick={nextPokemon}>Próximo</button>
        </div>
    )}
    </div>
 )
}