import React from 'react';
import './search.css';
import QueryForm from '../components/queryForm';
import ResultsOverview from '../components/resultsOverview';
import ResultsTable from '../components/resultsTable';

const Search = (props) => {
  return (
    <div className="Search">
      <h3 className="Search__heading">Earthquake Database</h3>
      <QueryForm />
      <ResultsOverview />
      <ResultsTable />
    </div>
  );
};

export default Search;
