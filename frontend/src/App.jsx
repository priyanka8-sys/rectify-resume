import React, { useState } from 'react';
import FileUploader from './components/FileUploader';
import ResumeEditor from './components/ResumeEditor';
import DownloadButton from './components/DownloadButton';

export default function App() {
  const [resumeData, setResumeData] = useState(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Rectify Resume</h1>
      <FileUploader setResumeData={setResumeData} />
      {resumeData && <ResumeEditor resumeData={resumeData} setResumeData={setResumeData} />}
      {resumeData && <DownloadButton resumeData={resumeData} />}
    </div>
  );
}