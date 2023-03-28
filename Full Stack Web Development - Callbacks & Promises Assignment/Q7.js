async function getData()
{
  try
  {
    const [todoRes, postRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
    ]);
    const [todoData, postData] = await Promise.all([
      todoRes.json(),
      postRes.json(),
    ]);
    const result = {
      todo: todoData,
      post: postData,
    };
    console.log(result);
  }
  catch (error)
  {
    console.error(error);
  }
}
getData();