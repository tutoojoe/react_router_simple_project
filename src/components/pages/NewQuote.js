import React from "react";
import QuoteForm from "../quotes/QuoteForm";
import { useHistory } from "react-router-dom";

const NewQuote = () => {
  const hisory = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    hisory.push('/quotes');
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
