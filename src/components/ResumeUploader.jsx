import React, { useState } from 'react';
import axios from 'axios';

const ResumeUploader = ({ setExtractedData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file to upload');
      return;
    }
    
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      setLoading(true);
      setError(null);

      const response = await axios.post('http://127.0.0.1:5000/upload_resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setExtractedData(response.data.extracted_data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError('An error occurred while uploading the file.');
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload Resume</h2>

      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4"
      />

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Upload Resume'}
      </button>
    </div>
  );
};

export default ResumeUploader;
