import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import "./Genres.css"

interface Genre {
    id: number;
    name: string;
}

interface Props {
    genres: Genre[];
    mode: boolean;
    activeGenre: number | null;
    onGenreClick: (genreId: number | null) => void;
}

function Genres({ genres, mode, activeGenre, onGenreClick }: Props) {
  
  const handleGenreClick = (genreId: number) => {
    if (activeGenre === genreId) {
        onGenreClick(null);  // clear
    } else {
        onGenreClick(genreId);  // set
    }
  };

  return (
    <aside className={`sidebar ${mode ? 'sidebar-dark' : 'sidebar-light'}`}>
      <div className="sidebar-content">
        {/* Genres Section */}
        <div className="sidebar-section">
          <h6 className="sidebar-section-label">Genres</h6>
          <ul className="sidebar-menu list-unstyled">
            {genres.map(genre => (
              <li key={genre.id}>
                <button
                  className={`sidebar-item ${activeGenre === genre.id ? 'active' : ''}`}
                  onClick={() => handleGenreClick(genre.id)}
                >
                  <FontAwesomeIcon icon={faFilm} className="sidebar-icon" />
                  <span className="sidebar-label">{genre.name}</span>
                  {activeGenre === genre.id && (
                    <span className="active-indicator"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Genres
