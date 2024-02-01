import React, { useState } from 'react';

function MySelect() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const selectStyle = {
    border: 'none',
    backgroundColor: '#f2f2f2',
    padding: '10px',
    fontSize: '16px',
    width: '100%',
    color: selectedOption === 'bb' ? '#ffffff' : 'inherit',
  };

  

  return (
    <div className="select-wrapper">
      <select
        value={selectedOption}
        onChange={handleChange}
        style={selectStyle}
      >
        <option value="">Select an option</option>
        <option value="aa">aa</option>
        <option value="bb">bb</option>
      </select>
    </div>
  );
}
 export default MySelect;