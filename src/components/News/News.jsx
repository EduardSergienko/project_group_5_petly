import { useState, useEffect } from 'react';
import { format } from 'date-fns';

import styles from 'components/News/News.module.scss';
import Loader from 'components/Loader';
import FilterInput from 'helpers/FilterInput';
import notices from 'helpers/Notification';
import apiServices from 'services/apiServices';
import HighlightText from 'helpers/HighlightText';

const News = ({ title }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParam] = useState(['title', 'description']);

  useEffect(() => {
    async function fetchNews() {
      try {
        const { data } = await apiServices.getNews();
        setIsLoaded(true);
        setItems(data.data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    }
    fetchNews();
  }, []);

  const searchNews = items => {
    const FilteredItems = items.filter(item =>
      searchParam.some(
        newItem =>
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
      )
    );
    if (FilteredItems < 1) {
      notices.showWarning('No matching news found');
    }
    return FilteredItems;
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
          {searchNews(items).map(item => {
            return (
              <li key={item._id} className={styles.newsItem}>
                {query.length > 1 ? (
                  <article>
                    <h2 className={styles.articleName}>
                      <HighlightText result={item.title} query={query} />
                    </h2>
                    <p className={styles.text}>
                      <HighlightText result={item.description} query={query} />
                    </p>

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
                ) : (
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
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default News;
