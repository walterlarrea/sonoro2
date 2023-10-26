
import "./Nav.css"

const Nav = ({ handleInputChange, query }) => {
    return (
      <nav>
        <div className="nav-container">
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Busca tu radio favorita"
          />
        </div>
        
      </nav>
    );
  };
  
  export default Nav;