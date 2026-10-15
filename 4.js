async function task4() {
  const [users, posts] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
  ]);

  console.log(await users.json());
  console.log(await posts.json());
}