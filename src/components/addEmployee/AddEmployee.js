import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addEmployee } from '../../redux/actions'
import logo from '../app/adattivo.png'
import { v4 as uuid } from 'uuid'
import {
  Backdrop,
  Modal,
  Fade,
  TextField,
  FormControlLabel,
  Switch
} from '@material-ui/core'

// Styles
import './AddEmployee.css'

const AddEmployee = ({ addEmployee }) => {
  // Form State
  const [id, setId] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [middleInitial, setMiddleInitial] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [dateOfEmployment, setDateOfEmployment] = useState('')
  const [isActive, setIsActive] = useState(false)

  // Material UI Modal
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // On component render, set random ID from uuid
  useEffect(() => {
    setId(uuid())
  }, [])

  // Add submit on form
  const handleSubmit = e => {
    e.preventDefault()
    addEmployee({
      id,
      firstName,
      middleInitial,
      lastName,
      dateOfBirth,
      dateOfEmployment,
      isActive
    })
    handleClose()
    resetInputFields()
  }

  // Reset state on form submission
  const resetInputFields = () => {
    setId(null)
    setFirstName('')
    setMiddleInitial('')
    setLastName('')
    setDateOfBirth('')
    setDateOfEmployment('')
    setIsActive(false)
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
    firstName.length > 0 &&
    lastName.length > 0 &&
    dateOfBirth.length > 0 &&
    dateOfEmployment.length > 0

  return (
    <div className='AddEmployee'>
      <button
        className="secondaryBtn"
        onClick={handleOpen}
      >
        Add New Employee
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
            <h3 className="formTitle">Add Employee</h3>
            <TextField
              InputLabelProps={formStyles}
              InputProps={formStyles}
              variant="outlined"
              label='First Name'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              InputLabelProps={formStyles}
              InputProps={formStyles}
              variant="outlined"
              label='Middle Initial'
              value={middleInitial}
              onChange={e => setMiddleInitial(e.target.value)}
              margin="normal"
              fullWidth
            />
            <TextField
              InputLabelProps={formStyles}
              InputProps={formStyles}
              variant="outlined"
              label='Last Name'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              InputLabelProps={formStyles}
              InputProps={formStyles}
              variant="outlined"
              label='Date of Birth'
              name='dateOfBirth'
              value={dateOfBirth}
              onChange={e => setDateOfBirth(e.target.value)}
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
              value={dateOfEmployment}
              onChange={e => setDateOfEmployment(e.target.value)}
              margin="normal"
              required
              fullWidth
            />
            <FormControlLabel
              control={<Switch checked={isActive} onChange={toggleActive} />}
              label={isActive ? 'Active' : 'Inactive'}
            />
            {isEnabled &&
              <button
                className="secondaryBtn"
                type="submit"
              >
                Add Employee
            </button>
            }

          </form>
        </Fade>
      </Modal>
    </div>
  )
}

export default connect(
  null,
  { addEmployee }
)(AddEmployee)