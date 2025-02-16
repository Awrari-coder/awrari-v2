// This file is kept minimal to prevent import errors
// Auth functionality has been removed as it's not needed
export function useAuth() {
  return {
    user: null,
    isLoading: false,
    error: null
  };
}