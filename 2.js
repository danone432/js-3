async function task2() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) throw new Error("Ошибка запроса");

    console.log(await res.json());
  } catch (error) {
    console.log(error.message);
  }
}