import { Route, Routes } from 'react-router-dom';
import Login from './Views/Login';

export default function App() {
  return (
    <body className='flex flex-col min-h-screen'>
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </main>
    </body>
  );
}
