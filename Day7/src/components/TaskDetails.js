import { Container, Paper, Typography } from '@mui/material'
import React from 'react'

function TaskDetails({ task }) {
  return (
    <Container>
        <Typography variant='h2'>Task Details</Typography>
        <Paper elevation={3} style={{padding: '16px'}}>
            <Typography variant='body1'>{task}</Typography>
        </Paper>
    </Container>
  )
}

export default TaskDetails
