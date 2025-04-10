


type JwtTokenResponse = {
    access:string,
    refresh:string,
}

type CredentialUser = {
    username: string,
    password: string,
    password2: string,
    email: string,
    first_name: string,
    last_name: string,
    phone: string,
}


type Tokens = {
    access?: string,
    refresh?: string,
}

