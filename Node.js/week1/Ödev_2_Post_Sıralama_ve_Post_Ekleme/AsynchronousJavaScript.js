// here, we created a post object
const posts = [
    {name: 'post 1', content: 'Node.js'},
    {name: 'post 2', content: 'React'},
    {name: 'post 3', content: 'Django'}
];

// listPosts function expression lists all posts to the console screen
const listPosts = () => {
    posts.map(post => {
        console.log(post.name + " " + post.content);
    })
};

// addPost function expression adds new posts to the posts object
const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        //reject("Hata Olustu");
    });

    return promise1;
}

// shows the posts object on the command-line
async function showPosts() {
    try {
        await addPost({name: 'post 4', content: 'Flask'});
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

showPosts();