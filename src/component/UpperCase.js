import React, { useState } from 'react';

export const UpperCase = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleConvertClick = () => {
    setInputText(inputText.toUpperCase());
  };

  return (
    <div className='fixed  flex top-0 left-0 w-full p-2 bg-gray-900 z-50'>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        rows="3"
        
        className="bg-slate-800 text-white p-2 w-full"
        
        placeholder="Enter text..."
      />
     <div
  onClick={handleConvertClick}
  className="mt-2 mb-2  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 mr-[-2px] flex items-center justify-center cursor-pointer"
>
  Uppercase
</div>
    </div>
  );
};
