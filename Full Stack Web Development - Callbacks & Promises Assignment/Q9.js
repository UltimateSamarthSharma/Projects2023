const url = "https://jsonplaceholder.typicode.com/posts/123456789";
fetch(url)
  .then((response) =>
  {
    if (response.ok)
    {
      return response.json();
    }
    else
    {
      throw new Error("Network response was not ok");
    }
  })
  .then((data) =>
  {
    console.log(data);
  })
  .catch((error) =>
  {
    console.error("Error fetching data:", error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "An error occurred while fetching data. Please try again later.";
    document.body.appendChild(errorMessage);
  });