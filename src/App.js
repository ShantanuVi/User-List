import React from 'react';
import UserList from './UserList';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div>
      <ChakraProvider>
        <UserList />
      </ChakraProvider>
    </div>
  );
}

export default App;
