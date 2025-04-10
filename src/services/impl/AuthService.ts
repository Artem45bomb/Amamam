import { axios } from "@/utils/axios";
import basicAxios from "axios";

class AuthService {
  constructor(
    private readonly BASE_URL_API: string = process.env
      .NEXT_PUBLIC_BASE_URL_API ?? ""
  ) {}

  async login(username: string, password: string): Promise<JwtTokenResponse> {
    console.log(this.BASE_URL_API + "/token/");
    const { data } = await axios.post<JwtTokenResponse>(
      this.BASE_URL_API + "/token/",
      { username, password }
    );
    return data;
  }

  async signup(user: CredentialUser): Promise<void> {
    await axios.post(this.BASE_URL_API + "/users/", user);
  }

  async getUserProfile(accessToken: string): Promise<UserProfile> {
    const { data } = await basicAxios.get<UserProfile>(
      this.BASE_URL_API + "users/me/",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  }

  async updateProfile(userData:UserProfile): Promise<UserProfile> {
    const { data } = await axios.patch<UserProfile>(
      this.BASE_URL_API + "users/update_profile/",
      userData,
    );
    return data;
  }
}

export const authService = new AuthService();
