export async function enhanceSection(section, content) {
  const res = await fetch('http://localhost:8000/ai-enhance', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ section, content })
  });
  const data = await res.json();
  return data.improved_content;
}
