import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../redux/actions'
import { VISIBILITY_FILTERS } from '../../redux/actions'

import '../../styles/index.css'

const FilterEmployees = ({ activeFilter, setVisibilityFilter }) => {

  return (
    <div className='filters'>
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const filterStatus = VISIBILITY_FILTERS[filterKey]

        return (
          <button
            key={`visibility-filter-${filterStatus}`}
            className={
              activeFilter === filterStatus ?
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
  return { activeFilter: state.visibilityFilter }
}
// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  { setVisibilityFilter }
)(FilterEmployees)

