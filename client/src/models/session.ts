import { reactive } from "vue";
import { router } from "../router/index";
import { list, User } from "./user";

const session = reactive({
    user: null as User | null,
});

export const Login = async (handle: string, password: string) => {
    const user = list.find((u: User) => u.handle === handle);

    if (!user) throw new Error("User not found");
    if (user.password !== password) throw new Error("Incorrect Password");

    session.user = user;
    router.push("/wall");
};

export const Logout = () => {
    session.user = null;
    router.push("/");
};

export default session;
