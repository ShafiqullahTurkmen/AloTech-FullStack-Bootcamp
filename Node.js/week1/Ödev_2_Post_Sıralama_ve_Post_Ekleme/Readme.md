## Konsol ekranında postlarımızı sıralayalım

```js
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

// call listPosts function
listPosts();
```
[Post Output Screenshot](https://github.com/ShafiqullahTurkmen/Full-Stack-Repository/tree/main/Node.js/week1/Ödev_2_Post_Sıralama_ve_Post_Ekleme/images/post.png?raw=true)
## Post Output
```powershell
PS D:\Users\Shafiqullahturkmen\Full-Stack-Repository\Node.js\week1\Ödev_2_Post_Sıralama_ve_Post_Ekleme> node .\AsynchronousJavaScript.js
post 1 Node.js
post 2 React
post 3 Django
```

## Sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım

```js
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
```

[New Post Output Screenshot](https://github.com/ShafiqullahTurkmen/Full-Stack-Repository/tree/main/Node.js/week1/Ödev_2_Post_Sıralama_ve_Post_Ekleme/images/newpost.png?raw=true)

## New Post Output
```powershell
PS D:\Users\Shafiqullahturkmen\Full-Stack-Repository\Node.js\week1\Ödev_2_Post_Sıralama_ve_Post_Ekleme> node .\AsynchronousJavaScript.js
post 1 Node.js
post 2 React
post 3 Django
post 4 Flask
```
