import React, { useState } from "react";
import { Form } from "./Form";
import { Box, Button, Typography } from "@mui/material";
import TaskList from "./TaskList";

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{ textAlign: "center", backgroundColor: "white", padding: "2rem" }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to Task Management System
      </Typography>
      <Box sx={{ display: "flex", gap: 1, margin: "15px 0" }}>
        <Button variant="contained" onClick={handleOpen}>
          Add
        </Button>
        <Button variant="contained">Edit</Button>
        <Button variant="contained">Delete</Button>
        <Button variant="contained">Completed</Button>
      </Box>
      <TaskList />
      <Form flag={open} handleClose={handleClose} />
    </Box>
  );
};

export default App;
