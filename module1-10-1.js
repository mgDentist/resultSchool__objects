const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
];

const findUsersOnlineNames = () => {
    const onlineUsers = [];

    users.forEach((user) => {
        if (user.status === 'online') {
            onlineUsers.push(user);
        }
    });
    console.log(onlineUsers);

    const onlineUserName = [];

    onlineUsers.forEach((userOnline) => {
        onlineUserName.push(userOnline.username);
    });
    console.log(onlineUserName);

    let usersOnlineNames = onlineUserName.join(', ');

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);
    
};

findUsersOnlineNames();


