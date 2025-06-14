import React, { useState } from 'react';
const students = [
  { name: '이태희', password: '0551', url: 'https://example.com/pdf/이태희.pdf' },
];
export default function App() {
  const [selected, setSelected] = useState(null);
  const [input, setInput] = useState('');
  const correct = selected && input === selected.password;
  return (
    <div style={{ padding: 24 }}>
      {selected ? (
        <div>
          <h2>{selected.name} 성적표</h2>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder='비밀번호 입력' />
          <button onClick={() => correct ? window.open(selected.url, '_blank') : alert('비밀번호 오류')}>
            열람하기
          </button>
          <button onClick={() => setSelected(null)}>뒤로가기</button>
        </div>
      ) : (
        students.map((s, i) => (
          <div key={i} style={{ marginBottom: 12 }}>
            {s.name}
            <button onClick={() => setSelected(s)} style={{ marginLeft: 10 }}>열람</button>
          </div>
        ))
      )}
    </div>
  );
}