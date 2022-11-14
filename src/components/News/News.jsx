import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';

const News = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/news')
      .then(res => res.json())
      .then(
        ({ data }) => {
          setIsLoaded(true);
          console.log(data);
          setItems(data);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <article>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div>
                <span>{item.date}</span>
                <button type="button">Read more</button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    );
  }
};

export default News;
