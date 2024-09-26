import { Routes, Route } from 'react-router-dom';

export function AppShell() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello World!</h1>} />
    </Routes>
  );
}