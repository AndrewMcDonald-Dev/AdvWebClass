const userModel = require("./user");
const { StatusCodes } = require("http-status-codes");
const { db, OnjectId } = require("./mongo");

const postCollection = db.db("myFirstDatabase").collection("posts");

const list = [
    {
        src: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg",
        caption:
            "Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two",
        owner: "cool",
        likes: [],
        comments: [],
        isPublic: true,
        id: 1,
    },
    {
        src: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg",
        caption:
            "Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two",
        owner: "cool",
        likes: [],
        comments: [],
        isPublic: true,
        id: 2,
    },
    {
        src: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-560x280,f_auto,q_auto:best/newscms/2022_13/3543963/220328-ukriane-mb-0729.jpg",
        caption:
            "Russian forces focus on eastern Ukraine amid rising fears they may seek to split the country in two",
        owner: "kool",
        likes: [],
        comments: [],
        isPublic: true,
        id: 3,
    },
];

let highestId = 3;

const includeUser = async (post) => ({
    ...post,
    user: await userModel.getByHandle(post.owner),
});

const get = async (id) => {
    // const post = list.find((post) => post.id === parseInt(id));
    const post = await postCollection.findOne({ _id: new OnjectId(id) });
    if (!post)
        throw { statusCode: StatusCodes.NOT_FOUND, message: "Post not found" };
    return await includeUser(post);
};

const remove = async (id) => {
    const post = await postCollection.findOneAndDelete({
        _id: new ObjectId(id),
    });
    return await includeUser(post);
};
const update = async (id, newPost) => {
    newPost = await postCollection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: newPost },
        { returnDocument: "after" }
    );
    return await includeUser(newPost);
};

module.exports = {
    async create(post) {
        const result = await postCollection.insertOne(post);
        post = await get(result.insertedId);
        return await includeUser(post);
    },
    remove,
    update,
    postCollection,
    async getList() {
        const posts = await postCollection.find().toArray();
        return Promise.all(posts.map((post) => includeUser(post)));
    },
};

module.exports.get = get;
