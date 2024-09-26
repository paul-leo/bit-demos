import { MemoryRouter } from 'react-router-dom';
import { AppShell } from "./app-shell.js";
    
export const AppShellBasic = () => {
  return (
    <MemoryRouter>
      <AppShell />
    </MemoryRouter>
  );
}