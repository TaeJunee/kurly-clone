import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes, useLocation } from 'react-router-dom'
import GlobalFooter from './components/common/globalFooter/GlobalFooter'
import GlobalHeader from './components/common/globalHeader/GlobalHeader'
import { Main, Login, Signup, ProductDetail, ProductList } from './pages'
import './reset.css'

function App() {
  const queryClient = new QueryClient()
  const location = useLocation();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <GlobalHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product/list" element={<ProductList location={location} />} />
        </Routes>
        <GlobalFooter /> 
      </QueryClientProvider>
    </div>
  );
}

export default App;
