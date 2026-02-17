import { useState, useEffect } from 'react';
import { User } from '../types';

// Placeholder Auth Hook
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Check for existing JWT token and validate with backend
    const checkAuth = async () => {
      try {
        // const userData = await api.get<User>('/auth/me');
        // setUser(userData);
      } catch (error) {
        console.error("Not authenticated");
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (credentials: any) => {
    // TODO: Implement login logic
    console.log("Logging in...", credentials);
  };

  const logout = () => {
    setUser(null);
    // TODO: Clear token
  };

  return { user, loading, login, logout, isAdmin: user?.role === 'admin' };
}
