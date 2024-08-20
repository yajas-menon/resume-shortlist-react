import React, { useState } from 'react';
import axios from 'axios';
import Main from '../src/pages/main'

function App() {
    // const [selectedFile, setSelectedFile] = useState(null);
    // const [result, setResult] = useState(null);

    // const handleFileChange = (event) => {
    //     setSelectedFile(event.target.files[0]);
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('file', selectedFile);

    //     try {
    //         const response = await axios.post('http://127.0.0.1:5000/upload_resume', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });
    //         setResult(response.data);
    //     } catch (error) {
    //         console.error('Error uploading resume', error);
    //     }
    // };

    return (
        // <div className="container mx-auto p-4">
        //     <h1 className="text-xl font-bold mb-4">Resume Shortlisting</h1>
        //     <form onSubmit={handleSubmit}>
        //         <input 
        //             type="file" 
        //             onChange={handleFileChange} 
        //             className="mb-4" 
        //             accept="application/pdf" 
        //         />
        //         <button
        //             type="submit"
        //             className="bg-blue-500 text-white px-4 py-2 rounded"
        //         >
        //             Submit
        //         </button>
        //     </form>

        //     {result && (
        //         <div className="mt-6">
        //             <h2 className="text-lg font-semibold">Fit Score: {result.score.toFixed(2)}%</h2>
        //             <p className="mt-2">Matching Skills: {result.extracted_skills.join(', ')}</p>
        //             <p className="mt-2">Intent Labels: {result.intent_labels.join(', ')}</p>
        //             <p className="mt-2">Job Description: {result.job_description}</p>
        //         </div>
        //     )}
        // </div>
        <div>
          <Main/>
        </div>
    );
}

export default App;
