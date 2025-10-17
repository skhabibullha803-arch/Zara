import React, { useState } from 'react';

function MessagingComponent() {
  const [message, setMessage] = useState('💝');
  const [file, setFile] = useState(null);

  const handleSendMessage = () => {
    // Logic to send the message
    console.log('Message sent:', message);
    setMessage('');
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSendMessage}>Send</button>
      {file && <p>File selected: {file.name}</p>}
    </div>
  );
}

export default MessagingComponent;
  
