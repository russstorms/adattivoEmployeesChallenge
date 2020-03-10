import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { editEmployee } from '../../redux/actions'
import {
  Backdrop,
  Modal,
  Fade,
  TextField,
  FormControlLabel,
  Switch
} from '@material-ui/core'

// Styles
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    border: 'none',
    padding: '10px',
  },
}))

const EditEmployee = () => {
  // Form State
  const [firstName, setFirstName] = useState('')
  const [middleInitial, setMiddleInitial] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [dateOfEmployment, setDateOfEmployment] = useState('')
  const [isActive, setIsActive] = useState(false)

  // Material UI Modal
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {

  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    editEmployee({
      firstName,
      middleInitial,
      lastName,
      dateOfBirth,
      dateOfEmployment,
      isActive
    })
  }

  const toggleActive = () => {
    setIsActive(!isActive)
  }

  const isEnabled =
    firstName.length > 0 &&
    middleInitial.length > 0 &&
    lastName.length > 0 &&
    dateOfBirth.length > 0 &&
    dateOfEmployment.length > 0

  return (
    <div className='Edit-Employee'>
      <button
        className="commonBtn"
        onClick={handleOpen}
      >
        Edit Employee
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 2500,
        }}
        disableAutoFocus={true}
        disableEnforceFocus
      >
        <Fade in={open}>
          <form
            onSubmit={handleSubmit}
          >
            <h4 className="formTitle">Add Employee</h4>
            <TextField
              variant="outlined"
              label='First Name'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              defaultValue={firstName}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              label='Middle Initial'
              value={middleInitial}
              onChange={e => setMiddleInitial(e.target.value)}
              defaultValue={middleInitial}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              label='Last Name'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              defaultValue={lastName}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              label='Date of Birth'
              name='dateOfBirth'
              value={dateOfBirth}
              onChange={e => setDateOfBirth(e.target.value)}
              defaultValue={dateOfBirth}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              label='Date of Employment'
              name='dateOfEmployment'
              value={dateOfEmployment}
              onChange={e => setDateOfEmployment(e.target.value)}
              defaultValue={dateOfEmployment}
              margin="normal"
              required
              fullWidth
            />
            <FormControlLabel
              control={<Switch checked={isActive} onChange={toggleActive} />}
              label={isActive ? 'Active' : 'Inactive'}
            />
            <button
              className="commonBtn"
              type="submit"
              disabled={isEnabled ? false : true}
            >
                Create!
            </button>
          </form>
        </Fade>
      </Modal>
    </div>
  )
}

export default connect(
  null,
  { editEmployee }
)(EditEmployee)