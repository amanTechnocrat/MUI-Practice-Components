import React, { useState } from 'react';
import SelectCurrency from 'react-select-currency';

const CurrencyDropdown = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('KWD');

    const handleCurrencyChange = (currency) => {
        console.log(currency)
        setSelectedCurrency(currency);
    };

    return (
        <div>
            <h2>Selected Currency: {selectedCurrency.value}</h2>
            <SelectCurrency
                style={{width:"30px"}}
                currency={selectedCurrency}
                onChange={handleCurrencyChange}
                // value={'KWD'}
            />
        </div>
    );
};

export default CurrencyDropdown;
