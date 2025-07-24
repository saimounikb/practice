import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  

  useEffect(()=>{
  fetch('https://restcountries.com/v3.1/all?fields=name')
  .then(res => res.json())
  .then(data => {
    const countryNames = data.map(country => country.name.common);
    setCountries(countryNames);
  })
  .catch(error => console.error('Error:', error))},[])

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">United States</option>
        {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
