import React, { useState } from "react";
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import * as XLSX from "xlsx";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const FloatingForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    city:"",
    state: "",
    message: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleExportToExcel = () => {
    debugger;
    const worksheet = XLSX.utils.json_to_sheet([formData]); // Convert form data to a worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Form Data");
    XLSX.writeFile(workbook, "FormData.xlsx"); // Download the Excel file
    handleClose(); // Close the dialog after exporting
  };

  return (
    <>
      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: 70,
          right: 100,
        }}
        onClick={handleClickOpen}
      >
        <SupportAgentIcon />
      </Fab>

      {/* Dialog for Form */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            name="email"
            onChange={handleChange}
            value={formData.email}
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Phone Number"
            type="number"
            name="phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Address"
            type="text"
            fullWidth
            name="address"
            onChange={handleChange}
            value={formData.address}
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="City"
            type="text"
            name="city"
            onChange={handleChange}
            value={formData.city}
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="State"
            type="text"
            fullWidth
            name="state"
            onChange={handleChange}
            value={formData.state}
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Message"
            type="text"
            fullWidth
            multiline
            rows={4}
            name="message"
            onChange={handleChange}
            value={formData.message}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleExportToExcel} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FloatingForm;