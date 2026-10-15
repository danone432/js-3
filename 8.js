async function task8() {
  const url = "https://jsonplaceholder.typicode.com/todos";

  // Create
  let res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Учиться JS", completed: false }),
  });
  console.log("Создание:", await res.json());

  // Read
  res = await fetch(url);
  console.log("Список:", await res.json());

  // Update
  res = await fetch(url + "/1", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: true }),
  });
  console.log("Обновление:", await res.json());

  // Delete
  res = await fetch(url + "/1", { method: "DELETE" });
  console.log("Удаление:", res.status);
}