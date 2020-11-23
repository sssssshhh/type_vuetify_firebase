// request
export interface UserRequest {
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

// reponse
export interface UserResponse {
    id: string;
    password: string;
    familyName: string;
    givenName: string;
    familyNameK: string;
    givenNameK: string;
    email: string;
    birthDate: string;
    tel: string;
    status: string;
    registDate: string;
    lastAccessDate: string;
    lastUpdateDate?: string;
}