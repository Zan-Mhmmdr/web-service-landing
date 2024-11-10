// components/Card.jsx
const Card = ({ children }) => {
    return (
      <div className="card">
        <div className="card-header">
          <h2>{children.props.day}</h2> {/* Menampilkan nama hari */}
        </div>
        <div className="card-body">
          {children} {/* Menampilkan konten dari Content */}
        </div>
      </div>
    );
  };
  
  export default Card;
  