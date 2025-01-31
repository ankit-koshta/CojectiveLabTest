import { useState } from "react";
import {
  Box,
  Button,
  Input,
  MenuItem,
  Select,
  Typography,
  Modal,
} from "@mui/material";

export const Form = ({ flag, handleClose }) => {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {};

  return (
    <Modal
      open={flag}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <Box sx={{ display: "flex", padding: "10px 0" }}>
            <Typography
              sx={{ minWidth: "100px", fontWeight: "bold", textAlign: "left" }}
            >
              Title
            </Typography>
            <Input
              aria-describedby="my-helper-text"
              name="title"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Box sx={{ display: "flex", padding: "10px 0" }}>
            <Typography
              sx={{ minWidth: "100px", fontWeight: "bold", textAlign: "left" }}
            >
              Description
            </Typography>
            <Input
              aria-describedby="my-helper-text"
              name="description"
              value={formData.description}
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Box sx={{ display: "flex", padding: "10px 0" }}>
            <Typography
              sx={{ minWidth: "100px", fontWeight: "bold", textAlign: "left" }}
            >
              Deadline
            </Typography>
            <Input
              aria-describedby="my-helper-text"
              name="deadline"
              value={formData.deadline}
              onChange={(e) => handleChange(e)}
            />
          </Box>
          <Box sx={{ display: "flex", padding: "10px 0" }}>
            <Typography
              sx={{ minWidth: "100px", fontWeight: "bold", textAlign: "left" }}
            >
              Priority
            </Typography>
            <Select
              value={formData.priority}
              variant="standard"
              name="priority"
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={"medium"}>Medium</MenuItem>
              <MenuItem value={"high"}>High</MenuItem>
              <MenuItem value={"very-high"}>Very High</MenuItem>
            </Select>
          </Box>
          <Button variant="outlined">Add Task</Button>
        </form>
      </Box>
    </Modal>
  );
};
