export const setSession = (username: string, role: string) => {
    localStorage.setItem('user', JSON.stringify({ username, role }));
  };
  
  export const clearSession = () => {
    localStorage.removeItem('user');
  };
  
  export const getSession = () => {
    const session = localStorage.getItem('user');
    return session ? JSON.parse(session) : null;
  };
  