import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent,
  InputAdornment,
} from "@mui/material";
import { ReactNode } from "react";

interface AddProjectFormDialogProps {
  open: boolean;
  form: {
    name: string;
    location: string;
    capacity: string;
    status: string;
    energyType: string;
    usageRemaining: string;
    closingWindowPhase1: string;
    closingWindowPhase2: string;
    avgUnitPrice: string;
  };
  handleClose: () => void;
  handleChange: (e: any) => void;
  handleSelectChange: (
    event: SelectChangeEvent<string>,
    child: ReactNode
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const AddProjectFormDialog = ({
  open,
  form,
  handleClose,
  handleChange,
  handleSubmit,
  handleSelectChange,
}: AddProjectFormDialogProps) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Project</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Name"
          name="name"
          fullWidth
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Location"
          name="location"
          fullWidth
          value={form.location}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Capacity"
          name="capacity"
          type="number"
          fullWidth
          value={form.capacity}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">MW</InputAdornment>,
          }}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel>Status</InputLabel>
          <Select
            name="status"
            value={form.status}
            label="Project Status"
            onChange={handleSelectChange}
          >
            <MenuItem value="operational">Operational</MenuItem>
            <MenuItem value="closed">Closed</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel>Energy Type</InputLabel>
          <Select
            name="energyType"
            value={form.energyType}
            label="Energy Type"
            onChange={handleSelectChange}
          >
            <MenuItem value="solar">Solar</MenuItem>
            <MenuItem value="wind">Wind</MenuItem>
            <MenuItem value="hybrid">Hybrid</MenuItem>
          </Select>
        </FormControl>
        <TextField
          margin="dense"
          label="Usage Remaining"
          name="usageRemaining"
          fullWidth
          type="number"
          value={form.usageRemaining}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">MW</InputAdornment>,
          }}
        />
        <TextField
          margin="dense"
          label="Closing Window Phase 1"
          name="closingWindowPhase1"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={form.closingWindowPhase1}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Closing Window Phase 2"
          name="closingWindowPhase2"
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={form.closingWindowPhase2}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Avg Unit Price"
          name="avgUnitPrice"
          type="number"
          fullWidth
          value={form.avgUnitPrice}
          onChange={handleChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">₹/kWh</InputAdornment>,
          }}
          inputProps={{
            min: 0,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddProjectFormDialog;
