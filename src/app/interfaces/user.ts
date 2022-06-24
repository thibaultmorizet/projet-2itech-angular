export interface User {
    id?: number;
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    movies?: object[];
    roles?: string[];
}
