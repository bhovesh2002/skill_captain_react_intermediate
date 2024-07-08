import { Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

function CatFactPage() {

    const [catFact, setCatFact] = useState("");

    const fetchCatFact = async () => {
        try{
            const response = await axios.get("https://catfact.ninja/fact");
            setCatFact(response.data.fact);
        }catch(error) {
            console.log("ERROR: ",error);
        }
    }

  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        Welcome to Cat Fact page!
      </Typography>
      <Typography variant='body1' gutterBottom>
        Get ready to learn some intersting facts about cats...
      </Typography>
      <br />
      <Button onClick={fetchCatFact} variant='contained' color='primary'>
        Get Fact Cat!
      </Button>
      <br />
      <br />
      {catFact && (
        <Typography variant='body2' gutterBottom>
            Fact: {catFact}
        </Typography>
      )}
    </Container>
  )
}

export default CatFactPage;
