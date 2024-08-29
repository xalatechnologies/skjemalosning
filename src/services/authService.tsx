export type UserRole = 'Admin' | 'FormCreator' | 'User';

interface AuthResponse {
  username: string;
  role: UserRole;
}

const users = [
  { username: 'admin', password: 'admin123', role: 'Admin' as UserRole },
  { username: 'creator', password: 'creator123', role: 'FormCreator' as UserRole },
  { username: 'user', password: 'user123', role: 'User' as UserRole },
];

export const mockLogin = (username: string, password: string): Promise<AuthResponse> => {
  return new Promise((resolve, reject) => {
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      resolve({ username: user.username, role: user.role });
    } else {
      reject('Invalid username or password');
    }
  });
};

export const mockLogout = (): Promise<void> => {
  return new Promise((resolve) => {
    resolve();
  });
};
