import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";

function LocationForm() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);


  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState("");
    setSelectedCity("");
    const statesOfCountry = State.getStatesOfCountry(e.target.value);
    setStates(statesOfCountry);
  };

  const handleStateChange = (e) => {
    let hh = JSON.parse(e.target.value)
    setSelectedState(hh);
    setSelectedCity("");
    const citiesOfState = City.getCitiesOfState(hh.countryCode,hh.isoCode);
    setCities(citiesOfState);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <label htmlFor="country">Country</label>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">--Select--</option>
        {Country.getAllCountries().map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <>
          <label htmlFor="state">State</label>
          <select value={JSON.stringify(selectedState)} onChange={handleStateChange}>
            <option value="">--Select--</option>
            {states.map((state) => (
              <option key={state.isoCode} value={JSON.stringify(state)}>
                {state.name}
              </option>
            ))}
          </select>
        </>
      )}

      {selectedState && (
        <>
          <label htmlFor="city">City</label>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">--Select--</option>
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}

export default LocationForm;
