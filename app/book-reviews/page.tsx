
import React from 'react'
import HomeButton from './home-btn'
import BookReviewsTable from './book-reviews-table'
import ReviewsFooter from './reviews-footer'
import ReviewsHeader from './reviews-header'

export default function page() {
  return (
    <div>
      <ReviewsHeader/>
      <BookReviewsTable/>
      <HomeButton/>
      <ReviewsFooter/>
    </div>
  )
}
