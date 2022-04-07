const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const { db, isConnected, ObjectId } = require("./mongo");

const collection = db.db("myFirstDatabase").collection("users");

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

const get = async (id) => {
    const user = await collection.findOne({ _id: new ObjectId(id) });
    return { ...user, password: undefined };
};

const remove = async (id) => {
    const user = await collection.findOneAndDelete({ _id: new ObjectId(id) });
    return { ...user.value, password: undefined };
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
    console.log(password, user.password);
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

const seed = async () => {
    return await collection.insertMany(list);
};

module.exports = {
    async create(user) {
        user.id = ++highestId;

        user.password = await bcrypt.hash(
            user.password,
            +process.env.SALT_ROUNDS
        );

        list.push(user);
        console.log(list);
        return { ...user, password: undefined };
    },
    remove,
    update,
    login,
    collection,
    seed,
    fromToken,
    async getList() {
        return (await collection.find().toArray()).map((user) => ({
            ...user,
            password: undefined,
        }));
    },
};

module.exports.get = get;
