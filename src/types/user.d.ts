

type Gender ="MALE" | "FEMALE";


type UserProfile = {
    _id:string
    email:string
    photo:string;
    nameFirst:string;
    nameLast:string;
    surname: string;
    dateOfBirth: string;
    gender: Gender;
    city: string;
    phoneNumber:string;
}

type Session = { userProfile: UserProfile }