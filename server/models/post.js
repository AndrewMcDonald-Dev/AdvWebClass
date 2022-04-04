const userModel = require("./user");

const list = [
    {
        src: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg",
        caption:
            "Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two",
        owner: 1,
        likes: [],
        comments: [],
        isPublic: true,
        id: 1,
    },
    {
        src: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg",
        caption:
            "Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two",
        owner: 1,
        likes: [],
        comments: [],
        isPublic: true,
        id: 2,
    },
    {
        src: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg",
        caption:
            "Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two",
        owner: 1,
        likes: [],
        comments: [],
        isPublic: true,
        id: 3,
    },
];

let highestId = 3;

const includeUser = (post) => ({ ...post, user: userModel.get(post.owner) });

const get = (id) => {
    const post = list.find((post) => post.id === parseInt(id));
    return includeUser(post);
};

const remove = (id) => {
    const index = list.findIndex((user) => user.id === parseInt(id));
    const post = list.splice(index, 1)[0];
    return includeUser(post);
};
const update = (id, user) => {
    const index = list.findIndex((user) => user.id === parseInt(id));
    const newPost = Object.assign(list[index], user);
    return includeUser(newPost);
};

module.exports = {
    create(post) {
        post.id = ++highestId;
        list.push(post);
        return includeUser(post);
    },
    remove,
    update,
    get list() {
        return list.map((post) => ({
            ...post,
            user: userModel.get(post.owner),
        }));
    },
};

module.exports.get = get;
