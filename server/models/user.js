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
const highestId = Math.max(list.map((user) => user.id));

const get = (id) => {
    return list.find((user) => user.id === parseInt(id));
};

module.exports = {
    create(user) {
        user.id = ++highestId;
        list.push(user);
        return user;
    },
};

module.exports.list = list;
module.exports.get = get;
