async function task6() {
  const controller = new AbortController();

  const timer = setTimeout(() => controller.abort(), 3000);

  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      { signal: controller.signal }
    );

    console.log(await res.json());
  } catch (error) {
    console.log("Запрос отменён или произошла ошибка");
  } finally {
    clearTimeout(timer);
  }
}
