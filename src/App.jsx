import styles from './App.module.css';
import Index from './ui/pages';
import { useApp } from './data/hooks/useApp.page';
import { createContext } from 'react';

export const AppContext = createContext({});

function App() {
  const useAppValues = useApp();
  return (
    <>
      <header className={styles.header}>
        <h1>
          Treina<span>Music</span>
        </h1>
      </header>
      <AppContext.Provider value={useAppValues}>
        <Index />
      </AppContext.Provider>
    </>
  )
}

export default App;
