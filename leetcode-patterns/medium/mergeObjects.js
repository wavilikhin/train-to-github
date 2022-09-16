import axios from 'axios';

// Посты
// [
//     {
//         userId: 1,
//         id: 1,
//         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//         body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//     },
// ][
//     // Пользователи
//     {
//         id: 1,
//         name: 'Leanne Graham',
//         username: 'Bret',
//         email: 'Sincere@april.biz',
//         phone: '1-770-736-8031',
//     }
// ][
//     // Комменты
//     {
//         postId: 1,
//         id: 1,
//         name: 'id labore ex et quam laborum',
//         email: 'Eliseo@gardner.biz',
//         body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
//     }
// ][
//     // Выходной формат данных (посты):
//     {
//         id: 1, // id поста
//         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', //id title
//         userName: 'Leanne Graham',
//         commentsCount: 10,
//     }
// ];

const formatPosts = () => {
    const [posts, users, comments] = Promise.all(
        axios.get('https://jsonplaceholder.typicode.com/posts'),
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/comments')
    );

    const usersMap = {};
    const commentsMap = {};

    for (const user of users) {
        usersMap[user.id] = { user };
    }

    for (const comment of comments) {
        commentsMap[comment.id]
            ? (commentsMap[comment.id] += 1)
            : (commentsMap[comment.id] = 1);
    }

    return posts.map((post) => {
        const id = post.id;
        const title = post.title;
        const userName = usersMap[post.userId].userName;
        const commentsCount = commentsMap[post.id];

        return { id, title, userName, commentsCount };
    });
};

formatPosts();
