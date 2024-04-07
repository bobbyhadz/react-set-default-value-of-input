import './App.css';

import {useRef, useState} from 'react';

export default function App() {
  const [firstName, setFirstName] = useState('Default value');

  const ref = useRef(null);

  const handleClick = () => {
    console.log(ref.current.value);
  };

  return (
    <div>
      {/* 👇 For a controlled input field */}
      <input
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
      />

      {/* 👇️ For a controlled input field */}
      <input ref={ref} defaultValue="My default value" />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
