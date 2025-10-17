import React, { useState } from 'react';
import axios from 'axios';

function UnsendMessage() {
  const [messageId, setMessageId] = useState('🤬');
  const [response, setResponse] = useState('🤬');

  const handleUnsend = async () => {
    try {
      const res = await axios.post('/unsend', { messageId });
      setResponse(res.data);
    } catch (error) {
      setResponse(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={messageId}
        onChange={(e) => setMessageId(e.target.value)}
        placeholder="Enter message ID"
      />
      <button onClick={handleUnsend}>Unsend</button>
      <p>{response}</p>
    </div>
  );
}

export default UnsendMessage;
