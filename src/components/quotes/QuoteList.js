import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  const queryParams = new URLSearchParams(location.search);
  const isSortInputAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortInputAscending)
  const changeSortingHandler = () => {
    // changing the path to object as history hook allows it 
    history.push({
      pathname: location.pathname,
      search:`?sort=${(isSortInputAscending ? "desc" : "asc")}`
    })
    // changing the path hardcoded to a dynmic one

      // history.push(`${location.pathname}?sort=${(isSortInputAscending ? "desc" : "asc")}`);
    // history.push("/quotes?sort=" + (isSortInputAscending ? "desc" : "asc"));
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortInputAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;