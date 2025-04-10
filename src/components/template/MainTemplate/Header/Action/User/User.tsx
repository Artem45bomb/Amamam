"use client";
import {BtnIcon} from "@/components/ui/assets/BtnIcon";
import Image from "next/image";
import {FormEventHandler, useCallback, useState} from "react";
import {FormInput} from "@/components/ui/organizm/form";
import {BtnAction} from "@/components/ui/assets/BtnAction";
import {useLoginMutation} from "@/services/login";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import {authService} from "@/services/impl/AuthService";


type SignUpError = {
    username?: string[];
    phone?: string[];
    [key: string]: string[] | undefined;
}

export const UserAction = () => {
    const {status} = useSession();
    const {mutateAsync} = useLoginMutation();
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState<string>("");
    const [formData, setFormData] = useState<CredentialUser>({
        username: "",
        password: "",
        password2: "",
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
    });

    const handleClose = () => {
        setShow(false);
        setError("");
        setIsSignUp(false);
    };

    const handleProfile = () => {
        if (status === "authenticated")
            router.push("/profile");
        setShow(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateSignUpForm = () => {
        if (!formData.username || !formData.password || !formData.password2 || !formData.email) {
            setError("Все поля обязательны для заполнения");
            return false;
        }
        if (formData.password !== formData.password2) {
            setError("Пароли не совпадают");
            return false;
        }
        if (formData.password.length < 6) {
            setError("Пароль должен быть не менее 6 символов");
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setError("Некорректный email");
            return false;
        }
        return true;
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!validateSignUpForm()) {
            return;
        }

        try {
            await authService.signup(formData);
            // После успешной регистрации выполняем вход
            await mutateAsync({username: formData.username, password: formData.password});
            router.push("/profile");
            handleClose();
        } catch (error:any) {
            if (error.response?.data) {
                const errorData = error.response.data as SignUpError;
                const errorMessages = Object.entries(errorData)
                    .map(([, messages]) => messages?.join(', '))
                    .filter(Boolean)
                    .join('\n');
                setError(errorMessages || "Произошла ошибка при регистрации");
            } else {
                setError("Произошла ошибка при регистрации");
            }
        }
    };

    const handleSignIn = useCallback<FormEventHandler<HTMLFormElement>>(async (e) => {
        e.preventDefault();
        setError("");
        const formData = new FormData(e.currentTarget);
        const phone = ((formData.get("phone")?.toString() ?? '') as string)
            .replace(/[)\s]/g, '')
            .replace(/[(\s]/g, '')
            .trim();
        const password = (formData.get("password") ?? '')?.toString() as string;
        
        try {
            await mutateAsync({username: phone, password: password});
            router.push("/profile");
            handleClose();
        } catch {
            setError("Пользователь не найден или неверный пароль");
        }
    }, [mutateAsync]);

    return <div className="relative">
        <BtnIcon onClick={handleProfile}>
            <Image src={"/icon/user.svg"} fill alt={"user icon"}/>
        </BtnIcon>
        {show && status !== "authenticated" && <div className={"fixed bg-[#9F9F9F] bg-opacity-50 z-20 top-0 left-0 w-full h-full"}> </div>}
        {show && status !== "authenticated" && <div className="fixed z-30 w-full h-full top-0 left-0">
            <div className="bg-white border-l border-l-blue-700 w-3/4 h-full ml-auto text-black overflow-y-auto">
                <div className="flex flex-col min-h-full py-6 md:py-8 xl:py-10 px-4 md:px-8 xl:px-10">
                    <div className={"flex flex-col gap-6 md:gap-8 xl:gap-14 w-full"}>
                        <button className="relative w-7 h-7 ml-auto" onClick={handleClose}>
                            <Image fill src={"/icon/x.svg"} alt={"close login"}/>
                        </button>
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative whitespace-pre-line" role="alert">
                                <span className="block sm:inline">{error}</span>
                            </div>
                        )}
                        {!isSignUp ? (
                            <form className="flex flex-col font-gilroy text-left w-full md:w-4/5 lg:w-3/5" onSubmit={handleSignIn}>
                                <h2 className={"font-semibold text-2xl md:text-3xl"}>ВОЙТИ ИЛИ ЗАРЕГЕСТРИРОВАТЬСЯ</h2>
                                <p className={"text-xl md:text-2xl font-normal mb-6 md:mb-8 mt-6 md:mt-8"}>Пришлём письмо на указанную электронную почту. Введите код
                                    из письма.</p>
                                <div className={"flex flex-col gap-10 w-full"}>
                                    <>
                                        <FormInput input={"phone"} options={{phone:{inputProps:{name:"phone",id:"phone"}}}}/>
                                        <FormInput placeholder={"password"} name="password" id={"password"}/>
                                    </>
                                </div>
                                <BtnAction type={"submit"} className={"mt-[10vh] font-bold font-gilroy text-xl"} black>
                                    Войти
                                </BtnAction>
                                <button
                                    type="button"
                                    onClick={() => setIsSignUp(true)}
                                    className="mt-4 text-indigo-600 hover:text-indigo-500 font-medium"
                                >
                                    Нет аккаунта? Зарегистрироваться
                                </button>
                            </form>
                        ) : (
                            <form className="flex flex-col font-gilroy text-left w-full md:w-4/5 lg:w-3/5" onSubmit={handleSignUp}>
                                <h2 className={"font-semibold text-2xl md:text-3xl"}>РЕГИСТРАЦИЯ</h2>
                                <div className={"flex flex-col gap-3 md:gap-4 w-full mt-6 md:mt-8"}>
                                    <FormInput
                                        name="username"
                                        placeholder="Имя пользователя"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                    <FormInput
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <FormInput
                                        name="first_name"
                                        placeholder="Имя"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                    />
                                    <FormInput
                                        name="last_name"
                                        placeholder="Фамилия"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                    />
                                    <FormInput
                                        name="phone"
                                        placeholder="Телефон"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <FormInput
                                        name="password"
                                        type="password"
                                        placeholder="Пароль"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    <FormInput
                                        name="password2"
                                        type="password"
                                        placeholder="Подтверждение пароля"
                                        value={formData.password2}
                                        onChange={handleChange}
                                    />
                                </div>
                                <BtnAction type={"submit"} className={"mt-6 md:mt-8 font-bold font-gilroy text-xl"} black>
                                    Зарегистрироваться
                                </BtnAction>
                                <button
                                    type="button"
                                    onClick={() => setIsSignUp(false)}
                                    className="mt-4 text-indigo-600 hover:text-indigo-500 font-medium"
                                >
                                    Уже есть аккаунт? Войти
                                </button>
                            </form>
                        )}
                    </div>

                    <p className={"font-gilroy text-sm font-normal w-full md:w-4/5 lg:w-3/5 mt-6 md:mt-8"}>Нажимая на кнопку «Получить код», я даю согласие на
                        обработку своих персональных данных в соответствии
                        с политикой обработки персональных данных</p>
                </div>
            </div>
        </div>}
    </div>
}