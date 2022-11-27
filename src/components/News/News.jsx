import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useTranslation } from 'react-i18next';
import styles from 'components/News/News.module.scss';

import FilterInput from 'helpers/FilterInput';
import notices from 'helpers/Notification';
import apiServices from 'services/apiServices';
import ScrollToTop from 'react-scroll-to-top';
import ScrollToTopBtn from 'components/ScrollToTopBtn/ScrollToTopBtn';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
const News = () => {
  const { t } = useTranslation();

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchingNewsData, setSearchingNewsData] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        Loading.arrows({
          svgColor: '#f59256',
          backgroundColor: 'rgba(0,0,0,0.1)',
        });

        const { data } = await apiServices.getNews(page);

        setItems(prewState => [...prewState, ...data.data]);
        if (data.data.length < 9) {
          setHasMore(false);
          notices.showSuccess('Thats all News');
        }
        Loading.remove();
      } catch (error) {
        Loading.remove();
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
      Loading.arrows({
        svgColor: '#f59256',
        backgroundColor: 'rgba(0,0,0,0.1)',
      });
      const { data: searchData } = await apiServices.searchNews(search.value);
      setSearchingNewsData(searchData);
      Loading.remove();
    } catch (error) {
      Loading.remove();

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
      {/* {isLoaded && <Loader />} */}
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
      <ScrollToTop
        smooth
        component={<ScrollToTopBtn />}
        style={{ boxShadow: 'none' }}
      />
    </div>
  );
};

export default News;
