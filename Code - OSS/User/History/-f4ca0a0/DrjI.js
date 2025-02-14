const user = {
    name: 'Pasha',
    age: 30,
    city: 'Minsk',
}

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
