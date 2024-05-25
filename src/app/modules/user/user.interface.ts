export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  status: 'in-progress' | 'blocked ';
  role: 'admin' | 'student' | 'faculty';
  isDeleted: boolean;
};
// instead of this we can use partial
// export type NewUser = {
//   password: string;
//   role: 'student' | 'faculty' | 'admin';
//   id: string;
// };