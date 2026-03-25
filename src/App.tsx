import { useEffect, useState } from 'react';
import './App.css'
import Nav from './Nav'
import Menu from './Menu'
import Genres from './Genres';
import FamilyPopcorn from './FamilyPopcorn';
import MovieModal from './MovieModal';

function App() {
  const [mode, setMode] = useState<boolean>(false);
  const [genres, setGenres] = useState<{id: number, name: string}[]>([]);
  const [activeGenre, setActiveGenre] = useState<number | null>(null);
  const [movies, setMovies] = useState<any[]>([]);
  const [selectedMovie, setSelectedMovie]= useState <any | null>(null);
  const [isModalOpen, setIsModalOpen] =useState(false)
  const [searchTerm, setSearchTerm] = useState<string>("");


  const handleGenreClick = (genreId: number | null) => {
    // console.log('Genre clicked:', genreId);
    setActiveGenre(genreId);
  };

  // Filter movies by search OR show all for genre
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  )


  useEffect(()=>{
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
      method: 'GET', 
      headers:{
        accept: 'application/json',
        Authorization:import.meta.env.VITE_AUTHENTICATION_URL
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        // console.log(data.genres)
        setGenres(data.genres);
      })
      .catch(err => console.log(err));
    },[]);

    //fetching the movies by genre

    useEffect(() => {
      //  console.log('Movies useEffect - activeGenre:', activeGenre);
      
      if (!activeGenre) {
        setMovies([]);
        return;
      }

      const url = `https://api.themoviedb.org/3/genre/${activeGenre}/movies?language=en`;
      const options = {
        method: 'GET', 
        headers: {
          accept: 'application/json',
          Authorization: import.meta.env.VITE_AUTHENTICATION_URL
        }
      };

      fetch(url, options)
        .then(res => res.json())
        .then(data => {
          // console.log('Movies data:', data.results);
          setMovies(data.results);
        })
        .catch(err => console.log(err));
    }, [activeGenre]);  //Refetch when genre changes



  return (
    <div className={mode ? 'app-dark' : 'app-light'}>
     <Nav
        mode={mode}
        onClick={() => mode===true? setMode(false): setMode(true)}
        searchTerm={searchTerm} // Pass current dataok to Nav
        onSearchChange={setSearchTerm}// Pass updater function as the user types
      />
      <Menu mode={mode} />
      <main>
        <Genres 
          genres={genres} 
          mode={mode}
          activeGenre={activeGenre}
          onGenreClick={handleGenreClick}
        />
        {activeGenre && (
        <div className="movies-container">
          <h2>{genres.find(g => g.id === activeGenre)?.name} Movies</h2>
          <div className="movies-grid">
            {filteredMovies.map(movie => (  //mapping movies that came from filteredMovies from the search
              <div key={movie.id} className="movie-card" 
                onClick={()=>{
                  setSelectedMovie(movie);
                  setIsModalOpen(true);
                }}>
                <img 
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                  alt={movie.title}
                />
                <h4>{movie.title}</h4>
              </div>
              ))
            }
            {/* {movies.map(movie => (
              <div key={movie.id} className="movie-card" 
                onClick={()=>{
                  setSelectedMovie(movie); // save clicked movie
                  setIsModalOpen(true); // open pop up
                }}>
                <img 
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                  alt={movie.title}
                />
                <h4>{movie.title}</h4>
              </div>
            ))} */}
          </div>
        </div>
        )}
        <FamilyPopcorn isVisible={activeGenre === null} />
      </main>
      {isModalOpen && selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setIsModalOpen(false)} // to close pop up modal
          mode={mode}
        />
      )}
    </div>
  )
}

export default App
