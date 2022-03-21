import React, { Fragment } from "react";
import { Route, useParams, Link,useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NotFound from "./NotFound";
const DUMMY_QUOTES = [
  { id: "q1", author: "Tutoo", text: "Learning React is fun" },
  { id: "q2", author: "TutooJoe", text: "Django REST API has a strong base" },
];

const QuoteDetail = () => {
    const match = useRouteMatch() // this is used to mark the route path, so that in case if make a change in the actual
    // router, we dont have to make the changes in nested routes.
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
      {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
          <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Commments
          </Link>
        </div>
      </Route>

      {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
