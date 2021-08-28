import React, { useState } from 'react';
import { SidebarContainer, AddBtn, SearchDiv, SearchSubDiv, SearchBar, SearchBtn, LocationDiv, LocationSubDiv, Label, ZipDiv, ZipInput, RadiusSelect, CheckboxDiv, Checkboxes, CheckSubDiv, Checkbox, CheckLabel } from './Styles/Sidebar.style.js';

const Sidebar = () => {
  const [height, setHeight] = useState((window.innerHeight - 100).toString() + 'px');

  return (
    <SidebarContainer height={height}>
      <AddBtn>Add Item +</AddBtn>
      <SearchDiv>
        <Label>Search</Label>
        <SearchSubDiv>
          <SearchBar placeholder='Search...'></SearchBar>
          <SearchBtn>Enter</SearchBtn>
        </SearchSubDiv>
      </SearchDiv>
      <LocationDiv>
        <LocationSubDiv>
          <Label>Zipcode</Label>
          <ZipInput placeholder='Enter zipcode...'></ZipInput>
        </LocationSubDiv>
        <LocationSubDiv>
          <Label>Radius</Label>
          <RadiusSelect>
            <option>1 mile</option>
            <option>2 mile</option>
            <option>5 mile</option>
            <option>10 mile</option>
            <option>20 mile</option>
            <option>40 mile</option>
          </RadiusSelect>
        </LocationSubDiv>
      </LocationDiv>
      <CheckboxDiv>
        <Label>Category</Label>
        <Checkboxes>
          <CheckSubDiv><Checkbox type="checkbox" id='category1' name='food'/><CheckLabel for='category1'>Food</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='category2' name='drink'/><CheckLabel for='category2'>Drink</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='category3' name='clothing'/><CheckLabel for='category3'>Clothing</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='category4' name='service'/><CheckLabel for='category4'>Service</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='category5' name='furniture'/><CheckLabel for='category5'>Furniture</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='category6' name='electronic'/><CheckLabel for='category6'>Electronic</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='category7' name='hobby'/><CheckLabel for='category7'>Hobby</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='category8' name='miscellaneous'/><CheckLabel for='category8'>Miscellaneous</CheckLabel></CheckSubDiv>
        </Checkboxes>
      </CheckboxDiv>
      <CheckboxDiv>
        <Label>Condition</Label>
        <Checkboxes>
          <CheckSubDiv><Checkbox type="checkbox" id='condition1' name='new'/><CheckLabel for='condition1'>New</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='condition2' name='likeNew'/><CheckLabel for='condition2'>Like new</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='condition3' name='used'/><CheckLabel for='condition3'>Used</CheckLabel></CheckSubDiv>
          <CheckSubDiv><Checkbox type="checkbox" id='condition4' name='worn'/><CheckLabel for='condition4'>Worn</CheckLabel></CheckSubDiv>
        </Checkboxes>
      </CheckboxDiv>
    </SidebarContainer>
  );
};

export default Sidebar;