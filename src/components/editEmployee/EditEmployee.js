import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editEmployee } from '../../redux/actions'
import logo from '../app/adattivo.png'
import {
  Backdrop,
  Modal,
  Fade,
  TextField,
  FormControlLabel,
  Switch
} from '@material-ui/core'

const EditEmployee = ({ editEmployee, ...props }) => {
  const { employee } = props
  
  // Form State
  const [id] = useState(employee.id)
  const [firstName, setFirstName] = useState(employee.firstName)
  const [middleInitial, setMiddleInitial] = useState(employee.middleInitial)
  const [lastName, setLastName] = useState(employee.lastName)
  const [dateOfBirth, setDateOfBirth] = useState(employee.dateOfBirth)
  const [dateOfEmployment, setDateOfEmployment] = useState(employee.dateOfEmployment)
  const [isActive, setIsActive] = useState(employee.isActive)

  // Material UI Modal
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // Edit submit on form
  const handleSubmit = e => {
    e.preventDefault()
    editEmployee({
      id,
      firstName,
      middleInitial,
      lastName,
      dateOfBirth,
      dateOfEmployment,
      isActive
    })
    handleClose()
  }

  // Employee status
  const toggleActive = () => {
    setIsActive(!isActive)
  }

  // Override Material-UI modal styles
  const formStyles = ({
    style: {
      color: '#FFFFFF'
    }
  })

  // Check input fields for characters
  const isEnabled =
    employee.firstName.length > 0 &&
    employee.lastName.length > 0 &&
    employee.dateOfBirth.length > 0 &&
    employee.dateOfEmployment.length > 0

  return (
    <div className='EditEmployee'>
      <button
        className="tirtiaryBtn"
        onClick={handleOpen}
      >
        Edit Employee
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className='modal'
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
            <img 
              className='logo-two'
              src={logo}
              alt='adattivo logo, visit: http://adattivo.co'
            />
            <h3 className="formTitle">Edit {employee.firstName}'s Information</h3>
            <TextField
              InputLabelProps={formStyles}
              InputProps={formStyles}
              variant="outlined"
              label='First Name'
              onChange={e => setFirstName(e.target.value)}
              defaultValue={employee.firstName}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              InputLabelProps={formStyles}
              InputProps={formStyles}
              variant="outlined"
              label='Middle Initial'
              onChange={e => setMiddleInitial(e.target.value)}
              defaultValue={employee.middleInitial}
              margin="normal"
              fullWidth
            />
            <TextField
              InputLabelProps={formStyles}
              InputProps={formStyles}
              variant="outlined"
              label='Last Name'
              name='lastName'
              onChange={e => setLastName(e.target.value)}
              defaultValue={employee.lastName}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              InputProps={formStyles}
              InputLabelProps={formStyles}
              variant="outlined"
              label='Date of Birth'
              onChange={e => setDateOfBirth(e.target.value)}
              defaultValue={employee.dateOfBirth}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              InputLabelProps={formStyles}
              InputProps={formStyles}
              variant="outlined"
              label='Date of Employment'
              name='dateOfEmployment'
              onChange={e => setDateOfEmployment(e.target.value)}
              defaultValue={employee.dateOfEmployment}
              margin="normal"
              required
              fullWidth
            />
            <FormControlLabel
              control={<Switch checked={isActive} onChange={toggleActive} />}
              label={isActive ? 'Active' : 'Inactive'}
            />
            <button
              className="secondaryBtn"
              type="submit"
              disabled={isEnabled ? false : true}
            >
              Edit Employee
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