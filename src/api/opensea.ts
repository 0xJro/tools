import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
// import { Headers } from 'node-fetch';
// import fetch from 'node-fetch';

import fakeData from './fakeData';

interface ContactBody {
  message: string
}

export default function handler(
  req: GatsbyFunctionRequest<ContactBody>,
  res: GatsbyFunctionResponse
) {
    res.send({ 
    results: fakeData,
    message: req.body.message });
}

/*
export default function handler(
  req: GatsbyFunctionRequest<ContactBody>,
  res: GatsbyFunctionResponse
) {
  const SALES_API = 'https://api.opensea.io/api/v1/events?';
  const headers = new Headers({
    'Accept': 'application/json',
    'x-api-key': `${process.env.OPENSEA_API_KEY}`
  });
  const collection = 'collection_slug=azuki';
  const sales = '&event_type=successful';
  const raw_today = new Date(new Date().toString().slice(0,15)).getTime();
  const today = `&occurred_before=${raw_today * 0.001}`;
  const yesterday = `&occurred_after=${new Date(raw_today - 86400000).getTime() * 0.001}`;
  // const query = SALES_API + collection + sales + today + yesterday;
  const startingQuery = SALES_API + collection + sales + today;
  const THIRTY_DAYS = 2592000000 / 3;
  const ONE_DAY = 86400000;
  const limit = raw_today - ONE_DAY;
  let done = false;
  let high = 0;
  let low = Infinity;
  const average: any = [];
  const traitMap: any = {};
  const attributeMap: any = {};

  getLastThirtyDaySales();

  function getLastThirtyDaySales(next?: boolean) {
    let query = !!next ? `${startingQuery}&cursor=${next}` : startingQuery;
    fetch(query, {headers, method: 'GET'})
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const results = data.asset_events;
      grabAssetDetails(results, function() {
        if (data.next && !done) {
          // get the next page of assets
          getLastThirtyDaySales(data.next);
          return;
        }

        console.log('done');
        console.log(JSON.stringify({
          average,
          traitMap,
          attributeMap
        }))
        res.send({ 
          results: {
            average,
            traitMap,
            attributeMap
          },
          message: req.body.message })
      });
    });
  }

  function grabAssetDetails(assets: any, cb: Function) {
    if (assets.length == 0) {
      console.log(high, low, average, traitMap, attributeMap);
      cb();
      return;
    }
    const asset = assets.shift();
    const price = asset.total_price * 0.000000000000000001;
    if (price > high) {
      high = price;
    }
    if (price < low) {
      low = price;
    }
    average.push(price);

    const metadataHeaders = new Headers({
      'Accept': 'application/json',
    });

    if (!asset.asset) {
      grabAssetDetails(assets, cb);
      return;
    }
    
    fetch(asset.asset.token_metadata, {headers: metadataHeaders, method: 'GET'})
      .then((response) => response.json())
      .then((results) => {
        for (let i = 0; i < results.attributes.length; i++) {
          const metadata = results.attributes[i];

          if (new Date(asset.transaction.timestamp).getTime() < limit) {
            done = true;
            break;
          }

          if (!attributeMap[metadata.trait_type]) {
            attributeMap[metadata.trait_type] = {}
          }

          attributeMap[metadata.trait_type][metadata.value] = true;


          if (!traitMap[metadata.value]) {
            traitMap[metadata.value] = {};
            traitMap[metadata.value][asset.asset.token_id] = {
              id: asset.asset.token_id,
              price: [price],
              date: [asset.transaction.timestamp],
            };
          } else {
            if (traitMap[metadata.value][asset.asset.token_id]) {
              traitMap[metadata.value][asset.asset.token_id].price.push(price);
              traitMap[metadata.value][asset.asset.token_id].date.push(asset.transaction.timestamp);
            } else {
              traitMap[metadata.value][asset.asset.token_id] = {
                id: asset.asset.token_id,
                price: [price],
                date: [asset.transaction.timestamp],
              };
            }
          }
        }
        grabAssetDetails(assets, cb);
      });
  }
}
*/