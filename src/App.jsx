import React, { useState } from 'react';
const students = [{ name: '이태희', password: '0551', url: 'https://example.com/pdf/이태희.pdf' },];
export default function App() {
const [selected, setSelected] = useState(null);
const [input, setInput] = useState('');
return (
<div>{selected ? <div><h2>{selected.name} 성적표</h2><input value={input} onChange={e => setInput(e.target.value)} /><button onClick={() => input === selected.password ? window.open(selected.url, '_blank') : alert('비밀번호 오류')}>열람</button><button onClick={() => setSelected(null)}>뒤로</button></div> : students.map(s => <button key={s.name} onClick={() => setSelected(s)}>{s.name}</button>)}</div>
)}