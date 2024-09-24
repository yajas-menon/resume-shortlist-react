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

// import React, { useState } from 'react';
// import ResumeUploader from './components/ResumeUploader';

// function App() {
//   const [extractedData, setExtractedData] = useState(null);

//   const jobDescription = `
//     We are looking for a skilled Software Engineer with experience in the MERN stack, RESTful APIs, and cloud technologies. 
//     The ideal candidate should have a strong background in Python, Docker, and working with AI-based services. 
//     The role involves managing full-stack development and integrating third-party services like Google Gemini API.
//   `;

//   return (
//     <div className="bg-gray-100 min-h-screen p-5">
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold mb-4">Job Description</h1>
//         <p className="mb-8">{jobDescription}</p>

//         <ResumeUploader setExtractedData={setExtractedData} />

//         {extractedData && (
//           <div className="mt-10 bg-white p-5 rounded-lg shadow-md">
//             <h2 className="text-2xl font-bold mb-4">Extracted Resume Data</h2>
//             <pre className="whitespace-pre-wrap">{JSON.stringify(extractedData, null, 2)}</pre>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

