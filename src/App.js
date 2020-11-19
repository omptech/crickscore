import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from './Component/Navbar';
import MyCard from './Component/MyCard';
import { getMatches } from './api/Api';


function App() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches);
        console.log(data.matches);
      })
      .catch((error) => alert("could not load data"));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <br></br>
      <br></br>
      <Typography variant="h4" style={{ marginTop: 50 }}>Welcome to my live score App</Typography>
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
          {
            matches.map((match) => (
              <Fragment key={match.unique_id}>
                {
                  match.type == "Twenty20" ? (<MyCard match={match} />) : ("")
                }
              </Fragment>
            ))
          }
        </Grid>

      </Grid>
    </div>

  );
}

export default App;
