import React from 'react';
import NewsItem from './NewsItem/NewsItem';

const News = ({ state }) => {
  let newNewsData = state.newsData.map((el) => (
    <NewsItem id={el.id} name={el.name} />
  ));

  return (
    <div>
      <div>{newNewsData}</div>
    </div>
  );
};

export default News;
