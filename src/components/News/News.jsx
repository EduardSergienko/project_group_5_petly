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

  const shortenText = (text, max) => {
    return text && text.length > max
      ? `${text.slice(0, max).split(' ').slice(0, -1).join(' ')}...`
      : text;
  };

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
    notices.showError(error?.message || 'Oops, something wrong, try again');
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <div className={styles.newsWrap}>
        <h1 className={styles.title}>{title}</h1>
        <FilterInput value={query} onChange={setQuery} />

        <ul className={styles.box}>
          {searchNews(items).map(({ _id, title, description, date, url }) => {
            return (
              <li key={_id} className={styles.newsItem}>
                {query.length > 1 ? (
                  <article>
                    <h2 className={styles.articleName}>
                      <HighlightText result={title} query={query} />
                    </h2>
                    <p className={styles.text}>
                      <HighlightText result={description} query={query} />
                    </p>

                    <div className={styles.additional}>
                      <span className={styles.date}>
                        {format(new Date(date), 'dd/MM/yyyy')}
                      </span>
                      <a
                        href={url}
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
                    <h2 className={styles.articleName}>
                      {shortenText(title, 50)}
                    </h2>
                    <p className={styles.text}>
                      {shortenText(description, 225)}
                    </p>
                    <div className={styles.additional}>
                      <span className={styles.date}>
                        {format(new Date(date), 'dd/MM/yyyy')}
                      </span>
                      <a
                        href={url}
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
