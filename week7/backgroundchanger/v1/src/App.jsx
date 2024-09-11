import React, { useState } from 'react';

function App() {
  // State to store the current background color class
  const [bgColorClass, setBgColorClass] = useState('bg-white');

  // Function to change the background color
  const changeBackgroundColor = (colorClass) => {
    setBgColorClass(colorClass);
  };
  
  return (
    <div className={`${bgColorClass} h-screen flex flex-col items-center justify-center`}>
      <h1 className="text-2xl mb-4">Background Color Changer</h1>
      <div className="space-x-2">
        <button
          className="px-4 py-2 bg-blue-200 rounded hover:bg-blue-300"
          onClick={() => changeBackgroundColor('bg-blue-200')}
        >
          Light Blue
        </button>
        <button
          className="px-4 py-2 bg-green-200 rounded hover:bg-green-300"
          onClick={() => changeBackgroundColor('bg-green-200')}
        >
          Light Green
        </button>
        <button
          className="px-4 py-2 bg-red-200 rounded hover:bg-red-300"
          onClick={() => changeBackgroundColor('bg-red-200')}
        >
          Light Coral
        </button>
        <button
          className="px-4 py-2 bg-yellow-200 rounded hover:bg-yellow-300"
          onClick={() => changeBackgroundColor('bg-yellow-200')}
        >
          Light Yellow
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => changeBackgroundColor('bg-white')}
        >
          Reset
        </button>
      </div>
    </div>

  );
}

export default App;
