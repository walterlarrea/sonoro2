

const Card = ({ img, title, station,url }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            
            
          </section>
          <section className="radio">
            <div className="price">
              <p>{station}</p> 
            </div>
            
            <audio className='radio_audio' src={url} controls/>
            
           
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;