import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AuthContextProvider } from './context/AuthContext';
import SearchHeader from './components/SearchHeader';

const queryClient = new QueryClient();

function App() {
  return (
    <AuthContextProvider>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;