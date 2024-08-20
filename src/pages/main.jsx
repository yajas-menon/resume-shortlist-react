import React, { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

export default function Component() {
  const [uploading, setUploading] = useState(false);
  const [fitResult, setFitResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event, jobDescription) => {
    const file = event.target.files[0];
    if (file) {
      setUploading(true);
      
      const formData = new FormData();
      formData.append("file", file);
      formData.append("job_description", jobDescription);

      try {
        setLoading(true);
        const response = await axios.post("http://localhost:5000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setFitResult(response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setLoading(false);
        setUploading(false);
      }
    }
  };

  return (
    <div>
      <Loader isLoading={loading} />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6 space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Resume Shortlisting App</h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're looking for talented individuals to help us build the future of our company. Check out our open
              positions below.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid gap-8 px-4 md:px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {jobPositions.map((job, index) => (
            <Card key={index} {...job} onFileUpload={handleFileUpload} />
          ))}
        </div>
      </section>

      {fitResult && (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 space-y-4">
            <h2 className="text-2xl font-bold">Fit Score: {fitResult.fit_score.toFixed(2)}%</h2>
            <p className="mt-4"><strong>Primary Skills:</strong> {fitResult.primary_skills.join(", ")}</p>
            <p className="mt-4"><strong>Secondary Skills:</strong> {fitResult.secondary_skills.join(", ")}</p>
            <p className="mt-4"><strong>Soft Skills:</strong> {fitResult.soft_skills.join(", ")}</p>
            <p className="mt-4"><strong>Objectives:</strong> {fitResult.objectives}</p>
            <p className="mt-4"><strong>Description:</strong> {fitResult.description}</p>
          </div>
        </section>
      )}
    </div>
  );
}

const jobPositions = [
  {
    title: "Software Engineer",
    description: "Help us build cutting-edge web applications using the latest technologies.",
    content: "We're looking for experienced software engineers to join our growing engineering team. You'll be responsible for building and maintaining our core web applications, as well as collaborating with cross-functional teams to deliver high-quality features."
  },
  {
    title: "Product Manager",
    description: "Lead the development of our flagship product and drive innovation.",
    content: "We're seeking a talented product manager to join our product team. You'll be responsible for defining the product roadmap, collaborating with cross-functional teams, and ensuring the successful delivery of new features and enhancements."
  },
  {
    title: "UI/UX Designer",
    description: "Craft intuitive and visually stunning user experiences for our products.",
    content: "We're looking for a talented UI/UX designer to join our design team. You'll be responsible for creating user-centric designs, conducting user research, and collaborating with cross-functional teams to deliver exceptional user experiences."
  },
  {
    title: "Data Analyst",
    description: "Analyze and interpret data to drive business insights and decision-making.",
    content: "We're seeking a data analyst to join our growing data team. You'll be responsible for collecting, analyzing, and interpreting data to uncover valuable insights that inform our business strategy and product development."
  }
];

function Card({ title, description, content, onFileUpload }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex-1 mt-4">
        <p className="text-sm text-gray-600">{content}</p>
      </div>
      <div className="flex items-center justify-between mt-6">
        <a
          href="#"
          className="inline-flex h-9 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500"
          prefetch={false}
        >
          View Job
        </a>
        <div className="flex items-center gap-2">
          <label htmlFor={`file-upload-${title.replace(/\s+/g, "-").toLowerCase()}`} className="cursor-pointer">
            <UploadIcon className="w-5 h-5 text-gray-400" />
            <span className="sr-only">Upload resume</span>
          </label>
          <input
            id={`file-upload-${title.replace(/\s+/g, "-").toLowerCase()}`}
            type="file"
            className="hidden"
            onChange={(e) => onFileUpload(e, description)}
          />
        </div>
      </div>
    </div>
  );
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}
