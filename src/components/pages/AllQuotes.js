import React from 'react'
import QuoteList from '../quotes/QuoteList'

const DUMMY_QUOTES = [
  { id:'q1',author:'Tutoo',text:'Learning React is fun'},
  { id:'q2',author:'TutooJoe',text:'Django REST API has a strong base'},
]


const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}/>
  )
}

export default AllQuotes