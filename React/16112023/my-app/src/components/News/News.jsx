import React from 'react';

let NewsData = [
  { id: 1, new1: '1111111' },
  { id: 1, new1: '2222222' },
];

const News = ({ NewsData }) => {
  let newNewsData = NewsData.map((el) => <News id={el.id} new1={el.new1} />);
  return <div>{newNewsData}</div>;
};

export default News;
