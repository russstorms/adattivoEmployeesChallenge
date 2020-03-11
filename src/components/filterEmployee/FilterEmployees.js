import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../redux/actions'
import { VISIBILITY_FILTERS } from '../../redux/actions'

// Styles
import '../../styles/index.css'

const FilterEmployees = ({ currentFilter, setVisibilityFilter }) => {
  // console.log('VIS FILTERS', VISIBILITY_FILTERS)
  // console.log('VIS FILTERS OBJ KEYS', Object.keys(VISIBILITY_FILTERS))

  return (
    <div className='filters'>
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const filterStatus = VISIBILITY_FILTERS[filterKey]
        
        return (
          <button
            key={filterStatus}
            className={
              currentFilter === filterStatus ?
              'active' :
              'non-active'
            }
            onClick={() => {
              setVisibilityFilter(filterStatus)
            }}>
            {filterStatus}
          </button>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return { currentFilter: state.visibilityFilter }
}

export default connect(
  mapStateToProps,
  { setVisibilityFilter }
)(FilterEmployees)

