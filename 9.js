async function task9() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(await res.json());
  } catch (error) {
    console.log("Нет соединения с сервером");
  }
}
