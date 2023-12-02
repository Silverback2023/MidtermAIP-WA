import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const NewsItem = ({ article }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{article.title}</Typography>
        <Typography>{article.description}</Typography>
        {/* Add more details as needed */}
      </CardContent>
    </Card>
  );
};

export default NewsItem;
