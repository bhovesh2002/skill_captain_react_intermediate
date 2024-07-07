import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Button, Container, CssBaseline, TextField } from '@mui/material';

const formStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div css={formStyles}>
        <TextField
            label="username"
            variant='outlined'
            value={username}
            onChange={e => setUsername(e.target.value)}
            margin='normal'
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          margin="normal"
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >Login</Button>
      </div>
    </Container>
  )
}

export default LoginForm;
