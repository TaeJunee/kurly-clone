import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import { Main, LogIn, SignUp } from './pages'
import Goods from './pages/product/[id]'
import './reset.css'

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/goods/:id" element={<Goods />} />
        </Routes> 
      </QueryClientProvider>
    </div>
  );
}

export default App;
