import { UserImage } from './upload';

export interface User {
  id: number;

  defaultPageSize: number;
  userDarkTheme: boolean;
  dateJoined: string;

  /*
    Properties mapped from ../ad-user.ts
  */
  guid: string;
  lastName: string;
  firstName: string;
  middleName: string;
  displayName: string;
  emailAddress: string;
  distinguishedName: string;
  samAccountName: string;
  userPrincipalName: string;
  voiceTelephoneNumber: string;
  socketName: string;

  image?: UserImage;
}
