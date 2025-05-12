import { UserRole } from "../enums/user-role"

export type User={
    username:String,
    password:String,
    userRole:UserRole
}