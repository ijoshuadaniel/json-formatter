import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import './app.scss';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormat = () => {
    let data;

    try {
      data = JSON.stringify(JSON.parse(input), null, 4);
    } catch (error) {
      setError(true);
    }
    setResult(data);
  };

  const handleMinify = () => {
    let data;

    try {
      data = JSON.stringify(JSON.parse(input));
    } catch (error) {
      setError(true);
    }
    setResult(data);
  };

  const handleError = () => {
    setResult('');
    setInput('');
    setError(false);
  };

  if (loading) {
    return (
      <div className='json-loader'>
        <BeatLoader color='#06d6a0' />
      </div>
    );
  }

  return (
    <div className='json'>
      {error && (
        <div className='json-error'>
          <div className='json-error-msg'>
            <p className='json-error-msg-text'>Please enter a valid JSON</p>
            <button onClick={handleError} className='json-error-msg-button'>
              okay!
            </button>
          </div>
        </div>
      )}
      <div className='json-wrapper'>
        <div className='json-header'>Json Formatter Online</div>
        <div className='json-flex'>
          <textarea
            className='json-textarea'
            onChange={handleInputChange}
            value={input}
          ></textarea>
          <div className='json-controls'>
            <button className='json-controls-button' onClick={handleFormat}>
              Format
            </button>
            <button className='json-controls-button' onClick={handleMinify}>
              Minify
            </button>
          </div>
          <textarea className='json-textarea' disabled value={result}>
            {result}
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default App;
