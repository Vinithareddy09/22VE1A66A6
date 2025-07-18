// src/App.tsx
import React, { useState } from 'react';
import URLForm from './components/URLForm';
import ShortenedResult from './components/ShortenedResult';

const App: React.FC = () => {
  const [shortUrl, setShortUrl] = useState('');

  return (
    <div className="container">
      <h1>🔗 URL Shortener</h1>
      <URLForm onShorten={setShortUrl} />
      {shortUrl && <ShortenedResult shortUrl={shortUrl} />}
    </div>
  );
};

export default App;
