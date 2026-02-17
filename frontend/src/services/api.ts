// Service Layer for API Communication
// This module abstracts the HTTP client implementation, allowing easy switching 
// (e.g., from fetch to axios) or adding global interceptors for auth tokens.

// The base API path, proxied by Vite in development to the D backend
const API_BASE = '/api';

/**
 * Generic fetch wrapper to handle JSON responses and errors.
 * 
 * @template T - The expected return type of the API call.
 * @param endpoint - The API endpoint path (e.g., '/users').
 * @param options - Standard fetch options.
 * @returns Promise resolving to the parsed JSON response.
 */
export async function fetchJson<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      // TODO: Inject Authorization header here if token exists in state/localStorage
      ...options.headers,
    },
  });

  if (!response.ok) {
    // Basic error handling - could be expanded to parse backend error messages
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

/**
 * API methods object for clean usage in components.
 * Example: const users = await api.get<User[]>('/users');
 */
export const api = {
  get: <T>(endpoint: string) => fetchJson<T>(endpoint),
  
  post: <T>(endpoint: string, data: any) => 
    fetchJson<T>(endpoint, { method: 'POST', body: JSON.stringify(data) }),
    
  put: <T>(endpoint: string, data: any) => 
    fetchJson<T>(endpoint, { method: 'PUT', body: JSON.stringify(data) }),
    
  delete: <T>(endpoint: string) => 
    fetchJson<T>(endpoint, { method: 'DELETE' }),
};
