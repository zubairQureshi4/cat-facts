import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CatFact from './CatFact';
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <CatFact/>
      </QueryClientProvider>
    </div>
  )
}

export default App
