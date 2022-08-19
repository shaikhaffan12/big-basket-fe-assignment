import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './Filter.css';

import { useDispatch} from 'react-redux';
import { filterData } from '../../modules/Reducer/reducer';

function Filter() {
  // state for on hover dropdown menu
    const [ShowDropdown, SetShowDropdown] = useState(false);

// handleing filter by redux 
    const dispatch = useDispatch()
    const handleFilterChange = (data) => {
      dispatch(filterData(data)); 
      
    }

  return (
    <Dropdown
    onMouseLeave={() => SetShowDropdown(false)}
    onMouseOver={() => SetShowDropdown(true)}
    style = {{width : '13%'}}
    >
      <Dropdown.Toggle  id="dropdown-basic">
        Shop By Category
      </Dropdown.Toggle>

      <Dropdown.Menu show = {ShowDropdown}>
      <Dropdown.Item onClick = {() =>  {handleFilterChange("All")}}>All</Dropdown.Item>
        <Dropdown.Item onClick ={() => {handleFilterChange("fruites")}}>Fruites</Dropdown.Item>
        <Dropdown.Item onClick = {() => {handleFilterChange("vegetables")}}>Vegetables</Dropdown.Item>
        <Dropdown.Item onClick = {() =>  {handleFilterChange("herbs")}}>Herbs</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Filter;