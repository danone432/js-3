async function task3() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Ivan",
      email: "ivan@mail.com",
    }),
  });

  console.log(await res.json());
}