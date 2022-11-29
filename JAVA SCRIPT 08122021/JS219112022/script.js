const newPost = (post, data = Date()) => ({
    ...post,
    data
})

const firstPost = {
    id: 1,
    authop: 'Max', 
}

newPost(firstPost);