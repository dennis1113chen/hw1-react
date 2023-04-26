import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/Home';
import { QueryClient,QueryClientProvider  } from '@tanstack/react-query';
import 'antd/dist/reset.css';


function App() {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
    <Home/>
    </QueryClientProvider>
  );
}

export default App
