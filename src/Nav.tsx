import icon from "./assets/video.png"
import iconDarkMode from "./assets/video-darkMode.png"
import "./Nav.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

//OVDJE JOS MORAM DODAT PROP OF SEARCH AND DATA TYPE STRING
interface Props{
  mode: boolean;
  onClick: () => void;
}

function Nav({ mode, onClick }: Props) {
  return (
    <nav className= {mode?"d-flex align-items-center gap-3 p-2 darkComponent": "d-flex align-items-center gap-3 p-2"}
    >
      <img
        src={mode?iconDarkMode:icon}
        alt="movielogo"
        className="img-fluid me-3"
        style={{ height: 35, width: 'auto' }}
      />

      <div className={mode?"input-group flex-grow-1 me-3 darkInput":"input-group flex-grow-1 me-3"}
        style={{ 
                borderRadius: "20px",
                overflow: "hidden"
            }}
      >
        <span 
          className="input-group-text bg-white border-end-0"
          style={{ 
            borderRadius: "20px 0 0 20px",
            border: "1px solid #ced4da",
            borderRight: 'none'
          }}
        >
          <FontAwesomeIcon icon={faSearch} className="text-muted" />
        </span>
        <input
          type="text"
          className="form-control border-start-0"
          placeholder="Search movies..."
          style={{
            borderRadius: '0 20px 20px 0',
            border: '1px solid #ced4da',
            borderLeft: 'none',
            boxShadow: 'none'
          }}
        />
      </div>

      <div className="d-flex align-items-center">
        <div
          className="toggle-switch"
          onClick={onClick}
          style={{
            position: 'relative',
            width: 50,
            height: 30,
            backgroundColor: mode ? '#d0f3c2ff' : '#ccc',
            borderRadius: 15,
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            border: '2px solid #fff',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}
        >
          <div
            className="toggle-circle"
            style={{
              position: 'absolute',
              top: 3,
              left: mode ? 25 : 2,
              width: 20,
              height: 22,
              backgroundColor: '#fff',
              borderRadius: '50%',
              transition: 'left 0.3s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}
          />
        </div>
        <span className="">{mode ? '🌙' : '☀️'}</span>
        <span className={mode?"ms-2 small me-5 text-white":"ms-2 small me-5"}>
          {mode ? 'Dark' : 'Light'}
        </span>
      </div>
    </nav>
  )
}

export default Nav