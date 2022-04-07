const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

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
const update = async (id, user) => {
    const index = list.findIndex((user) => user.id === parseInt(id));
    const oldUser = list[index];

    if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
    }

    user = list[index] = { ...oldUser, ...user };

    return { ...user, password: undefined };
};

const login = async (email, password) => {
    const user = list.find((user) => user.email === email);
    if (!user)
        throw { stausCode: StatusCodes.NOT_FOUND, message: "User not found" };
    if (!(await bcrypt.compare(password, user.password)))
        throw {
            statusCode: StatusCodes.UNAUTHORIZED,
            message: "Invalid password",
        };

    const data = { ...user, password: undefined };
    const token = jwt.sign(data, process.env.JWT_SECRET);

    return { ...data, token };
};

const fromToken = async (token) =>
    new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) reject(err);
            else resolve(decoded);
        });
    });

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
    login,
    fromToken,
    get list() {
        return list.map((user) => ({ ...user, password: undefined }));
    },
};

module.exports.get = get;
