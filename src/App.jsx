import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/Home';
import 'antd/dist/reset.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Home />
  );
}

export default App
