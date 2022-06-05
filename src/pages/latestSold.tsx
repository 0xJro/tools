import React from 'react';

fetch('/api/opensea', {method: 'GET'})
  .then((response) => response.json())
  .then((data) => {
    console.log('data', data);
  });

const LatestSold = () => (
  <main>
    <h1>Latest Sold</h1>
    <p>
      hai
    </p>
  </main>
)

export default LatestSold