import { useEffect } from 'react';
import "./MovieModal.css"

interface MovieModalProps {
  movie: any;
  onClose: () => void;
  mode: boolean;
}

const MovieModal = ({ movie, onClose, mode }: MovieModalProps) => {
  if (!movie) return null;
  console.log(movie) // to see the movie's whole data

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className={`modal-backdrop ${mode ? 'modal-backdrop-dark' : 'modal-backdrop-light'}`}
      onClick={onClose}
    >
      <div 
        className={`modal-dialog modal-dialog-centered modal-dialog-scrollable ${mode ? 'modal-content-dark' : 'modal-content-light'}`}
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '640px', width: '90%', margin: 'auto' }}
      >
        <div className={`modal-content rounded-4 shadow-lg ${mode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
          {/* Header */}
          <div className="but">
            <button 
              type="button" 
              className={`btn-close ${mode ? 'btn-close-white' : ''}`}
              onClick={onClose}
              aria-label="Close"
            />
          </div>
          <div className="modal-header border-0 pb-0">
            <h5 className={`modal-title fw-semibold ${mode ? 'text-light' : 'text-dark'}`}>
              {movie.title || movie.name}
            </h5>
            {/* <button 
              type="button" 
              className={`btn-close ${mode ? 'btn-close-white' : ''}`}
              onClick={onClose}
              aria-label="Close"
            /> */}
          </div>

          {/* Body */}
          <div className="modal-body p-2">
            {/* Movie Poster */}
            {movie.poster_path && (
              <div className="mb-3 text-center">
                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title || movie.name}
                  className="img-fluid rounded-3 shadow"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>
            )}

            {/* Movie Details Grid */}
            <div className="row g-1 mb-4">
              {movie.vote_average && (
                <div className="col-12 col-lg-6">
                  <div className={`p-3 rounded-3 h-100 ${mode ? 'bg-secondary bg-opacity-10' : 'bg-light'}`}>
                    <label className={`form-label small fw-medium mb-1 ${mode ? 'text-secondary' : 'text-muted'}`}>
                      Rating
                    </label>
                    <div className={`fs-5 fw-semibold ${mode ? 'text-light' : 'text-dark'}`}>
                      ⭐ {movie.vote_average.toFixed(1)}/10
                    </div>
                  </div>
                </div>
              )}

              {movie.release_date && (
                <div className="col-sm-6">
                  <div className={`p-3 rounded-3 h-100 ${mode ? 'bg-secondary bg-opacity-10' : 'bg-light'}`}>
                    <label className={`form-label small fw-medium mb-1 ${mode ? 'text-secondary' : 'text-muted'}`}>
                      Release Date
                    </label>
                    <div className={`fs-6 fw-medium ${mode ? 'text-light' : 'text-dark'}`}>
                      {new Date(movie.release_date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
              )}

              {movie.vote_count && (
                <div className="col-sm-6">
                  <div className={`p-3 rounded-3 h-100 ${mode ? 'bg-secondary bg-opacity-10' : 'bg-light'}`}>
                    <label className={`form-label small fw-medium mb-1 ${mode ? 'text-secondary' : 'text-muted'}`}>
                      Vote Count
                    </label>
                    <div className={`fs-6 fw-medium ${mode ? 'text-light' : 'text-dark'}`}>
                      {movie.vote_count.toLocaleString()} votes
                    </div>
                  </div>
                </div>
              )}

              {movie.popularity && (
                <div className="col-sm-6">
                  <div className={`p-3 rounded-3 h-100 ${mode ? 'bg-secondary bg-opacity-10' : 'bg-light'}`}>
                    <label className={`form-label small fw-medium mb-1 ${mode ? 'text-secondary' : 'text-muted'}`}>
                      Popularity
                    </label>
                    <div className={`fs-6 fw-medium ${mode ? 'text-light' : 'text-dark'}`}>
                      {Math.round(movie.popularity)}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Overview */}
            {movie.overview && (
              <div className="mb-4">
                <label className={`form-label fw-medium ${mode ? 'text-light' : 'text-dark'}`}>
                  Overview
                </label>
                <p className={`${mode ? 'text-light' : 'text-dark'} mb-0`}>
                  {movie.overview}
                </p>
              </div>
            )}

            {/* Language */}
            {movie.original_language && (
              <div className="language mb-3">
                <label className={`form-label small fw-medium ${mode ? 'text-secondary' : 'text-muted'}`}>
                  Original Language
                </label>
                <div className={`${mode ? 'text-light' : 'text-dark'}`}>
                  {movie.original_language.toUpperCase()}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="modal-footer border-0 pt-0 justify-content-end gap-2">
            <button 
              type="button" 
              className={`btn ${mode ? 'btn-outline-secondary' : 'btn-outline-dark'} px-4 py-2`}
              onClick={onClose}
            >
              Close
            </button>
            <button 
              type="button" 
              className="btn btn-primary px-4 py-2"
              style={{ 
                backgroundColor: '#FF7A2F',
                borderColor: '#FF7A2F'
              }}
            >
              Watch Now
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;