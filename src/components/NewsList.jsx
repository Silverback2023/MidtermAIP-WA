import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItems from './NewsItems';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=fb5cf1fed1a74440b4e3d790c2fa4722'
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {news.map((article) => (
        <NewsItems key={article.title} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
