var form = document.getElementById("questionForm");

form.onsubmit = function(event) {
  event.preventDefault();

  var question = form.elements["question"].value;
  var description = form.elements["description"].value;
  var fileInput = form.elements["fileInput"];
  var fileName = "";

  if (fileInput.files && fileInput.files.length > 0) {
    fileName = fileInput.files[0].name;
  }

  var newBlog = {
    title: question,
    content: description,
    author: "Anonymous", 
    fileName: fileName
  };

  var blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  blogs.push(newBlog);

  localStorage.setItem("blogs", JSON.stringify(blogs));

  window.location.href = "home.html";
};

function clearForm() {
  form.elements["question"].value = "";
  form.elements["description"].value = "";
  form.elements["fileInput"].value = "";
  form.elements["question"].focus();
}
