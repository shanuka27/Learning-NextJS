import React from 'react';
import Layout from '../../components/layout';

export default function News({ results }) {
  return (
    <div>
      <h1>Search</h1>
    </div>
  );
}

const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ";

export async function getServersideProps({params}) {
  try {
     const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`;
     const results = await search(URL);


    return {
      props: {
        results: results
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        result: []
      }
    };
  }
}


