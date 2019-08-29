import React from 'react';
import {Route} from "react-router-dom"
import MovieList from "./MovieList"

function App() {
  return (
    <section>
      <Route path="/" component={MovieList} />
    </section>
  );
}

export default App;
