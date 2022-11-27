import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTranslation } from 'react-i18next';
import styles from 'components/News/News.module.scss';
import Loader from 'components/Loader';
import FilterInput from 'helpers/FilterInput';
import notices from 'helpers/Notification';
import apiServices from 'services/apiServices';

const News = () => {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchingNewsData, setSearchingNewsData] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        setIsLoaded(true);
        const { data } = await apiServices.getNews(page);

        setItems(prewState => [...prewState, ...data.data]);
        if (data.data.length < 9) {
          setHasMore(false);
          notices.showSuccess('Thats all News');
        }
        setIsLoaded(false);
      } catch (error) {
        setIsLoaded(false);
        return notices.showError('Oops, try again');
      }
    }

    fetchNews();
  }, [page]);

  async function searchNews(e) {
    e.preventDefault();
    const { search } = e.target.elements;

    if (search.value.trim() === '') {
      setSearchingNewsData(null);
      return;
    }
    try {
      setIsLoaded(true);
      const { data: searchData } = await apiServices.searchNews(search.value);
      setSearchingNewsData(searchData);
      setIsLoaded(false);
    } catch (error) {
      setIsLoaded(false);

      return notices.showError('Sorry, no news found, try again');
    }
  }

  const handleInputChange = evt => {
    if (evt.target.value.trim()) {
      return;
    }
    setSearchingNewsData(null);
  };

  const shortenText = (text, max) => {
    return text && text.length > max
      ? `${text.slice(0, max).split(' ').slice(0, -1).join(' ')}...`
      : text;
  };
  function handleShowMore() {
    setPage(page + 1);
  }

  return (
    <div className={styles.newsWrap}>
      <h1 className={styles.title}>{t('news.title')}</h1>
      <FilterInput onSubmit={searchNews} onChange={handleInputChange} />
      {isLoaded && <Loader />}
      {searchingNewsData ? (
        <ul className={styles.box}>
          {searchingNewsData.map(({ _id, title, description, date, url }) => {
            return (
              <li key={_id} className={styles.newsItem}>
                <article>
                  <h2 className={styles.articleName}>
                    {shortenText(title, 50)}
                  </h2>
                  <p className={styles.text}>{shortenText(description, 225)}</p>
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
              </li>
            );
          })}
        </ul>
      ) : (
        <InfiniteScroll
          className={styles.box}
          dataLength={items.length}
          next={handleShowMore}
          hasMore={hasMore}
          scrollThreshold={1}
        >
          {items.map(({ _id, title, description, date, url }) => {
            return (
              <li key={_id} className={styles.newsItem}>
                <article>
                  <h2 className={styles.articleName}>
                    {shortenText(title, 50)}
                  </h2>
                  <p className={styles.text}>{shortenText(description, 225)}</p>
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
              </li>
            );
          })}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default News;
