import React, {useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import FormComponent from './Form';
import MuiTooltip from './MuiTooltip';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

 const CustomizedDialogs = (props) => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState([]);

  const handleClickOpen = () => {
    const { data, selectedIds } = props
    const newState = data.filter(elem=>elem.id===selectedIds[0])
    setState(newState)
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
const updateHandler = () => {

}
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button onClick={handleClickOpen}><MuiTooltip title={"Delete"} icon={DeleteIcon} /></Button>
        <Button onClick={handleClickOpen}> <MuiTooltip title={"Edit"} icon={EditIcon} /></Button>
      </Stack>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Form
        </BootstrapDialogTitle>
        <DialogContent dividers>

          <FormComponent data ={state}/>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={updateHandler}>
            Update
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}


export default CustomizedDialogs;