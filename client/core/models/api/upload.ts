import { User } from './user';

export interface Upload {
  id: number;
  type: string;
  url: string;
  path: string;
  file: string;
  name: string;
  fileType: string;
  size: number;
}

export interface UserImage extends Upload {
  userId: number;
  user?: User;
}
