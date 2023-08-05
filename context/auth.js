import { useState } from 'react';

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const login = () => {
    // Perform your login actions (e.g., API calls) here
    setIsLoggedIn(true);
    setIsAdmin(true);
  };

  const logout = () => {
    // Perform your logout actions (e.g., API calls) here
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return { isLoggedIn, login, logout, isAdmin };
}
