import { Button, Checkbox, Container, FormControl, FormControlLabel, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

function TaskList() {

    const [tasks,setTasks] = useState([]);
    const [newTask, setNewTask] = useState({head:'',details:''});

    const addTask = () =>{
        if(newTask.head.trim() === '' || newTask.details.trim() === ''){
            return;
        }
        setTasks([...tasks,newTask]);
        setNewTask({ head: '', details: '' });
    }

    const completeTask = (taskName) => {
        console.log("Id",taskName)
        setTasks(tasks => {
            return tasks.filter(task => task.head !== taskName);
        });
    }
    
    console.log(tasks);


  return (
    <Container>
        <Typography variant='h2'>
            Task List
        </Typography>

        <TextField
          label="Enter new Task"
          value={newTask.head}
          required
          variant='standard'
          onChange={(e) => setNewTask({...newTask,head: e.target.value})}
        />
        <br />
        <TextField
          label="Enter task details"
          variant='filled'
          rows={5}
          fullWidth
          margin='dense'
          multiline
          value={newTask.details}
          onChange={(e) => setNewTask({...newTask,details: e.target.value})}
        />
        <br />
        <br />
        <Button variant='contained' onClick={addTask}>Add Task</Button>
        <br />
        <br />

        <FormControl>
            <List>
                {tasks.map((task,index) => (
                    <ListItem key={index}>
                        <FormControlLabel control={<Checkbox onChange={() => completeTask(task.head)} />} label={task.head} />
                    </ListItem>
                ))}
            </List>
        </FormControl>
    </Container>
  )
}

export default TaskList
