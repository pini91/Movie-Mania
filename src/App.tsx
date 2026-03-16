import { useEffect,useState } from 'react';
import './App.css'
import Nav from './Nav'
import Menu from './Menu'
import Genres from './Genres';
import FamilyPopcorn from './FamilyPopcorn';

function App() {
  const [mode, setMode] = useState<boolean>(false)
  const [genres, setGenres] = useState<{id: number, name: string}[]>([])
  const [activeGenre, setActiveGenre] = useState<number | null>(null)


  useEffect(()=>{
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {method: 'GET', headers: 
    {accept: 'application/json',
      Authorization:import.meta.env.VITE_AUTHENTICATION_URL
    }};

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        // console.log(data.genres)
        setGenres(data.genres);
      })
      .catch(err => console.log(err));
    },[]);


  return (
    <div className={mode ? 'app-dark' : 'app-light'}>
     <Nav
        mode={mode}
        onClick={() => mode===true? setMode(false): setMode(true)}
      />
      <Menu mode={mode} />
      <main>
        <Genres 
          genres={genres} 
          mode={mode}
          activeGenre={activeGenre}
          onGenreClick={setActiveGenre}
        />
        <FamilyPopcorn isVisible={activeGenre === null} />
      </main>
    </div>
  )
}

export default App
