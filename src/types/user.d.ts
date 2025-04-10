type Gender = "MALE" | "FEMALE" | "NONE";

type UserProfile = {
    id: number;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    phone: string;
    role: "customer" | "manager" | "admin";
    is_active: boolean;
    date_joined: string;
    gender: Gender | null;
    date_of_birth: string | null;
    city: string | null;
    avatar: string | null;
}

type UserUpdateData = {
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    gender: Gender,
    date_of_birth: string,
    city: string,
    delivery_address: string,
    delivery_postal_code: string,
    delivery_country:string,
}

type Session = { userProfile: UserProfile }