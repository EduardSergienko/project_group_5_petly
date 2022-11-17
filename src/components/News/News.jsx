import { useState, useEffect } from 'react';
import { format } from 'date-fns';

// import axios from 'axios';

import styles from 'components/News/News.module.scss';
import Loader from 'components/Loader';
import FilterInput from 'components/FilterInput';
import notices from 'helpers/Notification';

const News = ({ title }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParam] = useState(['title', 'description']);

  useEffect(() => {
    fetch('http://localhost:3000/api/news')
      .then(res => res.json())
      .then(({ data }) => {
        setIsLoaded(true);
        setItems(data);
      })
      .catch(error => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  const searchNews = items => {
    return items.filter(item => {
      return searchParam.some(newItem => {
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    });
  };

  if (error) {
    notices.showError('Oops, something wrong, try again');
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <div className={styles.newsWrap}>
        <h1 className={styles.title}>{title}</h1>
        <FilterInput value={query} onChange={setQuery} />

        <ul className={styles.box}>
          {searchNews(items).map(item => (
            <li key={item._id} className={styles.newsItem}>
              <article>
                <h2 className={styles.articleName}>{item.title}</h2>
                <p className={styles.text}>{item.description}</p>
                <div className={styles.additional}>
                  <span className={styles.date}>
                    {format(new Date(item.date), 'dd/MM/yyyy')}
                  </span>
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
