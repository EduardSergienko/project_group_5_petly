import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';

import styles from 'components/News/News.module.scss';

const News = ({ title }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/news')
      .then(res => res.json())
      .then(
        ({ data }) => {
          setIsLoaded(true);
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
      <div className={styles.newsWrap}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.search}>
          <label htmlFor="search">
            <input
              type="search"
              //   value={value}
              //   onChange={e => onChange(e.target.value)}
              name="search"
              id="search"
              placeholder="Search"
              className={styles.input}
            />
          </label>
        </div>

        <ul>
          {items.map(item => (
            <li key={item._id} className={styles.newsItem}>
              <article>
                <h2 className={styles.articleName}>{item.title}</h2>
                <p className={styles.text}>{item.description}</p>
                <div className={styles.additional}>
                  <span className={styles.date}>{item.date}</span>
                  <a
                    href={item.url}
                    className={styles.readMore}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read more
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default News;
