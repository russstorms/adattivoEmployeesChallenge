import React from 'react'
import { connect } from 'react-redux'
import { setStatusFilter } from '../../redux/actions'
import { STATUS_FILTERS } from '../../redux/actions'

// Styles
import '../../styles/index.css'

const FilterEmployees = ({ currentFilter, setStatusFilter }) => {
  // console.log('VIS FILTERS', VISIBILITY_FILTERS)
  // console.log('VIS FILTERS OBJ KEYS', Object.keys(VISIBILITY_FILTERS))

  return (
    <div className='filters'>
      {Object.keys(STATUS_FILTERS).map(filterKey => {
        const filterStatus = STATUS_FILTERS[filterKey]
        
        return (
          <button
            key={filterStatus}
            className={
              currentFilter === filterStatus ?
              'active' :
              'non-active'
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
  return { currentFilter: state.statusFilter }
}

export default connect(
  mapStateToProps,
  { setStatusFilter }
)(FilterEmployees)

