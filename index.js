document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("questionForm");

  form.onsubmit = function (event) {
    event.preventDefault();

    const question = form.elements["question"].value.trim();
    const description = form.elements["description"].value.trim();
    const fileInput = form.elements["fileInput"];
    const file = fileInput.files[0];

    if (!question || !description) {
      alert("Please fill out the question and description.");
      return;
    }

    const reader = new FileReader();

    reader.onload = function () {
      const imageData = reader.result;

      const newBlog = {
        title: question,
        content: description,
        author: "Anonymous",
        imageData: imageData || ""
      };

      const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      blogs.push(newBlog);
      localStorage.setItem("blogs", JSON.stringify(blogs));

      window.location.href = "home.html";
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      const newBlog = {
        title: question,
        content: description,
        author: "Anonymous",
        imageData: ""
      };

      const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      blogs.push(newBlog);
      localStorage.setItem("blogs", JSON.stringify(blogs));

      window.location.href = "home.html";
    }
  };
});
