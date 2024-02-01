// import React, { useState } from 'react';

// const PasswordChecker = () => {
//     const [password, setPassword] = useState('');
//     const [satisfiedRequirements, setSatisfiedRequirements] = useState([]);

//     const checkPasswordRequirements = () => {
//         const requirements = [
//             { regex: /.{8,}/, message: "At least 8 characters long" },
//             { regex: /[A-Z]/, message: "At least 1 uppercase character" },
//             { regex: /[a-z]/, message: "At least 1 lowercase character" },
//             { regex: /\d/, message: "At least 1 number" },
//             { regex: /[!@#$%^&*()\-_=+{};:,<.>]/, message: "At least 1 special character" }
//         ];

//         const satisfiedRequirements = requirements.filter(([regex, _]) => regex.test(password))
//             .map(([, message]) => message);

//         setSatisfiedRequirements(satisfiedRequirements);
//     };

//     const handleChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         checkPasswordRequirements();
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Enter your password:
//                     <input type="password" value={password} onChange={handleChange} />
//                 </label>
//                 <button type="submit">Check Requirements</button>
//             </form>
//             {satisfiedRequirements.length > 0 &&
//                 <div>
//                     <p>Password meets the following requirements:</p>
//                     <ul>
//                         {satisfiedRequirements.map((requirement, index) => (
//                             <li key={index}>{requirement}</li>
//                         ))}
//                     </ul>
//                 </div>
//             }
//         </div>
//     );
// };

// export default PasswordChecker;

import React, { useState, useEffect } from 'react';

const Timer = ({ hours }) => {
    
  const initialTimeInSeconds = hours * 3600;

  const [timeInSeconds, setTimeInSeconds] = useState(() => {
    const savedTimer = localStorage.getItem('timer');
    return savedTimer ? JSON.parse(savedTimer).timeInSeconds : initialTimeInSeconds;
  });

  // Function to format the time to HH:MM:SS format
  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${hrs.toString().padStart(2, '0')}HRS : ${mins.toString().padStart(2, '0')}MIN : ${secs.toString().padStart(2, '0')}SEC`;
  };

  useEffect(() => {
    // Save the timer state in local storage
    localStorage.setItem('timer', JSON.stringify({ timeInSeconds }));

    // Update the timer every second
    const interval = setInterval(() => {
      if (timeInSeconds === 0) {
        clearInterval(interval);
        return;
      }
      setTimeInSeconds((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [timeInSeconds]);

  return <div>{formatTime(timeInSeconds)}</div>;
};

export default Timer;

