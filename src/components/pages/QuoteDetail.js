import React, { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import NotFound from "./NotFound";
const DUMMY_QUOTES = [
  { id: "q1", author: "Tutoo", text: "Learning React is fun" },
  { id: "q2", author: "TutooJoe", text: "Django REST API has a strong base" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return (
      <Fragment>
        <NotFound />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
