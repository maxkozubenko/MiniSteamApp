export interface userLoginInterface {
    email: string,
    password: string
}

export interface userResetInterface {
    nickname: string,
    email: string,
}

export interface tokenInterface {
    message: string,
    jwt_token: string
}

export interface paramInterface {
    price: number,
    indie: boolean,
    action: string,
    adventure: boolean
}

export interface gameInterface {
    name: string,
    price: string,
    description: string,
    img: string,
    _id: string,
}