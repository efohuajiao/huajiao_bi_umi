export interface UserInfo {
  id: string;
  userAccount: string;
  userAvatar: string;
  userName: string;
  userPassword: string;
  userRole: string;
  createTime: Date;
  updateTime: Date;
  idDelete: number;
  exp?: number;
  iat?: number;
}
