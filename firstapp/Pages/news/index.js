import React from 'react';
import Layout from '../../components/layout';

export default function News({ result }) {
  return (
    <div>
      <h1>News</h1>
      <ul>
        {result.map((item, index) => (
          <li key={`${item.uri}-${index}`}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ";

export async function getStaticProps() {
  try {
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`);
    const data = await res.json();

    // console.log(data); 

    return {
      props: {
        result: data.results 
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        result: [] // Return an empty array or handle the error as needed
      }
    };
  }
}


