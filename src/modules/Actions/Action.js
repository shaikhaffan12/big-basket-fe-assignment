
// action for filter data
export const  filterData = (state,payload) => {
    state.filterData = payload.payload;
}

// action for data change in input field 
export const setDataChanged= (state, payload) => {
    state.dataChanged = payload.payload;
}

// action for count in badge of navbar
export const setCount = (state) => {
    state.count += 1; 
}

// action for search data changes in input field
export const setSearchData = (state,payload) => {
    state.searchData = payload.payload;
}