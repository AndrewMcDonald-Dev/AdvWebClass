const bcrypt = require("bcrypt");

const list = [
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
        pic: "someurl",
    },
    {
        firstName: "Type",
        lastName: "Script",
        email: "is@email.com",
        handle: "awesome",
        id: 3,
        password: "qwerty",
        pic: "someurl",
    },
];
let highestId = 3;

const get = (id) => ({
    ...list.find((user) => user.id === parseInt(id)),
    password: undefined,
});

const remove = (id) => {
    const index = list.findIndex((user) => user.id === parseInt(id));
    return { ...list.splice(index, 1)[0], password: undefined };
};
const update = (id, user) => {
    const index = list.findIndex((user) => user.id === parseInt(id));
    const newUser = Object.assign(list[index], user);
    return { ...newUser, password: undefined };
};

module.exports = {
    async create(user) {
        user.id = ++highestId;

        user.password = await bcrypt.hash(
            user.password,
            +process.env.SALT_ROUNDS
        );

        list.push(user);
        return { ...user, password: undefined };
    },
    remove,
    update,
    get list() {
        return list.map((user) => ({ ...user, password: undefined }));
    },
};

module.exports.get = get;
