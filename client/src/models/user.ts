export interface User {
    firstName: string;
    lastName: string;
    handle: string;
    password: string;
    email: string;
    pic: string;
    id: number;
}

export const list: User[] = [
    {
        firstName: "Andrew",
        lastName: "McDonald",
        email: "simple@email.com",
        handle: "cool",
        id: 1,
        password: "qwerty",
        pic: "https://randomuser.me/portraits/men/1.jpg",
    },
    {
        firstName: "Koolaid",
        lastName: "Guy",
        email: "ohyeag@email.com",
        handle: "kool",
        id: 2,
        password: "qwerty",
        pic: "https://randomuser.me/portraits/men/2.jpg",
    },
    {
        firstName: "Type",
        lastName: "Script",
        email: "is@email.com",
        handle: "awesome",
        id: 3,
        password: "qwerty",
        pic: "https://randomuser.me/portraits/women/2.jpg",
    },
];

export const findUser = (id: number): User => {
    const user = list.find((user) => user.id === id);
    if (!user) throw new Error("failed to find user in findUser");
    return user;
};
