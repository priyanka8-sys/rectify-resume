import React, { useState } from 'react';
import { enhanceSection } from '../api';

export default function SectionEditor({ section, content, onUpdate }) {
  const [localContent, setLocalContent] = useState(content);

  const handleEnhance = async () => {
    const res = await enhanceSection(section, localContent);
    setLocalContent(res);
    onUpdate(section, res);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalContent(value);
    onUpdate(section, value);
  };

  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2 capitalize">{section}</h2>
      <textarea
        value={typeof localContent === 'string' ? localContent : JSON.stringify(localContent, null, 2)}
        onChange={handleChange}
        className="w-full h-32 p-2 border rounded"
      ></textarea>
      <button
        onClick={handleEnhance}
        className="mt-2 px-3 py-1 bg-green-600 text-white rounded"
      >
        Enhance with AI
      </button>
    </div>
  );
}