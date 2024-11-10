// components/utils/Content.jsx
const Content = ({ day, tasks }) => {
    return (
      <div>
        <h5 className="day">{day}</h5>
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item">
              {task}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Content;
  