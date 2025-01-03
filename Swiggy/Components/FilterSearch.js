import React from 'react'

const FilterSearch = ({searchData,filterData,SortData}) => {
  return (
    <div className="filter-search">
    <button className="top-restaurants" onClick={filterData}>
      Top Rated Restaurant
    </button>

    <select name="" id="" onChange={SortData}>
      <option disabled="disabled">Select</option>
      <option value="sortByRating">Sort by Rating</option>
      <option value="sortByNearest">Sort by Nearest</option>
      <option value="sortByFoodName">Sort by Food Name</option>
    </select>

    <input
      type="text"
      placeholder="Search Restaurants"
      onInput={searchData}
    />
  </div>
  )
}

export default FilterSearch
