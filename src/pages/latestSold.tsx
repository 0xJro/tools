import React from 'react';
import "../css/index.css";

fetch('/api/opensea', {method: 'GET'})
  .then((response) => response.json())
  .then((data) => {
    console.log('data', data);
  });

const LatestSold = () => (
  <main>
    <h1 className="text-3xl font-bold underline">Latest Sold</h1>
    <p className="text-3xl font-bold underline">
      hai
    </p>
  </main>
)

export default LatestSold