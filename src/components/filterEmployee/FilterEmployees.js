import React from 'react'
import { connect } from 'react-redux'
import { setStatusFilter } from '../../redux/actions'
import { STATUS_FILTERS } from '../../redux/actions'

// Styles
import './FilterEmployees.css'
import '../../styles/index.css'

const FilterEmployees = ({ activeFilter, setStatusFilter }) => {

  // Map filter buttons to header
  return (
    <div className='FilterEmployees'>
      {Object.keys(STATUS_FILTERS).map(filterKey => {
        const filterStatus = STATUS_FILTERS[filterKey]
        
        return (
          <button
            key={filterStatus}
            className={
              activeFilter === filterStatus ?
              'activeFilter commonBtn' :
              'inactiveFilter commonBtn'
            }
            onClick={() => {
              setStatusFilter(filterStatus)
            }}>
            {filterStatus}
          </button>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return { activeFilter: state.visibilityFilter }
}

export default connect(
  mapStateToProps,
  { setStatusFilter }
)(FilterEmployees)

