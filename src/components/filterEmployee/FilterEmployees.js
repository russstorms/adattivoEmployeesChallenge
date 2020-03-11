import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../redux/actions'
import { VISIBILITY_FILTERS } from '../../redux/actions'

// Styles
import './FilterEmployees.css'
import '../../styles/index.css'

const FilterEmployees = ({ activeFilter, setVisibilityFilter }) => {

  return (
    <div className='FilterEmployees'>
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const filterStatus = VISIBILITY_FILTERS[filterKey]
        
        return (
          <button
            key={filterStatus}
            className={
              activeFilter === filterStatus ?
              'activeFilter commonBtn' :
              'inactiveFilter commonBtn'
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
  return { activeFilter: state.visibilityFilter }
}

export default connect(
  mapStateToProps,
  { setVisibilityFilter }
)(FilterEmployees)

