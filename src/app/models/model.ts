export interface UserLoginInterface {
    email: string;
    password: string;
}

export interface UserResetInterface {
    nickname: string;
    email: string;
}

export interface TokenInterface {
    message: string;
    jwt_token: string;
}

export interface ParamInterface {
    price: number;
    indie: boolean;
    action: string;
    adventure: boolean;
}

export interface GameInterface {
    name: string;
    price: string;
    description: string;
    img: string;
    _id: string;
}

export interface Friend {
    nickname: string;
    email: string;
    status: string;
}
