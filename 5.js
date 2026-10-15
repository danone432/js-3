async function task5() {
  const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/todos",
    "https://jsonplaceholder.typicode.com/abc",
  ];

  const results = await Promise.allSettled(
    urls.map(async (url) => {
      const res = await fetch(url);

      if (!res.ok) throw new Error("Ошибка запроса");

      return res.json();
    })
  );

  console.log(results);
}