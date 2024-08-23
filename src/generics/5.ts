export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserInfo = Record<UserRole, string>;

const RoleDescription: UserInfo = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
