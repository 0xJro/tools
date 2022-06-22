import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount
} from '../components/categories/categoriesSlice';

function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      {/* omit additional rendering output here */}
    </div>
  )
}

// import PropTypes from "prop-types"
// import { connect } from "react-redux"

// const Counter = ({ count, increment, categories }) => (
//   <div>
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//     <div>
//       {categories.map(category => (
//         <div key={category}>
//           <h3>{category}</h3>
//           <input type="checkbox" /> hi
//         </div>
//       ))}
//     </div>
//   </div>
// )

// Counter.propTypes = {
//   count: PropTypes.number.isRequired,
//   increment: PropTypes.func.isRequired,
//   categories: PropTypes.array.isRequired,
// }

// const mapStateToProps = ({ count, categories }) => {
//   return { count, categories }
// }

// const mapDispatchToProps = dispatch => {
//   return { 
//     increment: () => {
//       fetch('/api/opensea', {method: 'GET'})
//         .then((response) => response.json())
//         .then((data) => {
//           console.log('data', data);
//           // categories = data.results.categories;
//           // console.log('categories', categories);
//           dispatch({ type: `INCREMENT`, payload: {categories: data.results.categories} })
//         });
//     } }
// }

// const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

class LatestSold extends React.Component {

  render() {
    return (
      <main>
        <h1 className="text-3xl font-bold underline">Latest Sold</h1>
        <p className="text-3xl font-bold underline">
          hai
        </p>
        <Counter />
      </main>
    )
  }
}

export default LatestSold