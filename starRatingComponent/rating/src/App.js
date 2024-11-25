import React from 'react'
import StarRating from './components/StarRating'

const App = () => {
  return (
    <div>
      <StarRating/>
      <StarRating initialRating={3} totalStars={10}/>
    </div>
  )
}

export default App