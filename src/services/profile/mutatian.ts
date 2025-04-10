import { useMutation } from "@tanstack/react-query"
import { authService } from "../impl/AuthService"




export const useProfileUpdateMutation = () => {
    return useMutation({
        mutationFn:(data:UserUpdateData) => authService.updateProfile(data)
    })
}