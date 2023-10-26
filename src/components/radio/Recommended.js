
import Buttons from "@/components/radio/Buttons";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Paises</h2>
        <div className="recommended-flex">
          <Buttons onClickHandler={handleClick} value="" title="Mundial" />
          <Buttons onClickHandler={handleClick} value="Uruguay" title="Uruguay" />
          <Buttons onClickHandler={handleClick} value="Argentina" title="Argentina" />
          <Buttons onClickHandler={handleClick} value="Chile" title="Chile" />
          <Buttons onClickHandler={handleClick} value="Paraguay" title="Paraguay" />
          <Buttons onClickHandler={handleClick} value="Perú" title="Perú" />
          <Buttons onClickHandler={handleClick} value="Bolivia" title="Bolivia" />
          <Buttons onClickHandler={handleClick} value="Colombia" title="Colombia" />
          <Buttons onClickHandler={handleClick} value="Venezuela" title="Venezuela" />
          <Buttons onClickHandler={handleClick} value="Ecuador" title="Ecuador" />
          <Buttons onClickHandler={handleClick} value="Guatemala" title="Guatemala" />
          <Buttons onClickHandler={handleClick} value="Honduras" title="Honduras" />
          <Buttons onClickHandler={handleClick} value="Cuba" title="Cuba" />
          <Buttons onClickHandler={handleClick} value="República Dominicana" title="República Dominicana" />
          <Buttons onClickHandler={handleClick} value="Panamá" title="Panamá" />
          <Buttons onClickHandler={handleClick} value="Nicaragua" title="Nicaragua" />
          <Buttons onClickHandler={handleClick} value="Costa Rica" title="Costa Rica" />
          <Buttons onClickHandler={handleClick} value="Puerto Rico" title="Puerto Rico" />
          <Buttons onClickHandler={handleClick} value="El Salvador" title="El Salvador" />
          <Buttons onClickHandler={handleClick} value="México" title="México" />
          <Buttons onClickHandler={handleClick} value="Jamaica" title="Jamaica" />
          <Buttons onClickHandler={handleClick} value="España" title="España" />
          <Buttons onClickHandler={handleClick} value="Reino Unido" title="Reino Unido" />
          <Buttons onClickHandler={handleClick} value="Irlanda" title="Irlanda" />
          <Buttons onClickHandler={handleClick} value="Estados Unidos" title="Estados Unidos" />
          <Buttons onClickHandler={handleClick} value="Canada" title="Canada" />
        </div>
      </div>
    </>
  );
};

export default Recommended;