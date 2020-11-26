export interface User {
    id: string;
    password: string;
    familyName: string;
    givenName: string;
    familyNameK: string;
    givenNameK: string;
    email: string;
    birthDate: string;
    tel: string;
    status: number; // 가입유지여부
    registerDate: string;
    lastAccessDate: string;
}
