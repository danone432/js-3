async function task7() {
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) throw new Error("Ошибка");

      console.log(await res.json());
      return;
    } catch (error) {
      console.log("Повтор запроса:", i + 1);
    }
  }
}
