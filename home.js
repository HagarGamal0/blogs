document.addEventListener("DOMContentLoaded", function () {
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const blogContainer = document.getElementById("blogPostsContainer");
  const noPostsMessage = document.querySelector(".no-posts-message");

  if (blogs.length > 0) {
    noPostsMessage.style.display = "none";
  }

  blogs.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.className = "blog-post-card";

    const postHeader = document.createElement("div");
    postHeader.className = "post-header";

    const title = document.createElement("h3");
    title.textContent = blog.title;

    const meta = document.createElement("p");
    meta.className = "post-meta";
    meta.innerHTML = `By: ${blog.author} `;

    postHeader.appendChild(title);
    postHeader.appendChild(meta);

    const image = document.createElement("img");
image.src = blog.imageData || "https://placehold.co/600x300/e0e0e0/000000?text=Blog+Image";
      image.alt = "Blog Post Image";
    image.className = "post-image";

    const postContent = document.createElement("div");
    postContent.className = "post-content";

    const content = document.createElement("p");
    content.textContent = blog.content;

    postContent.appendChild(content);

    const postActions = document.createElement("div");
    postActions.className = "post-actions";

    const commentIcon = document.createElement("div");
    commentIcon.className = "icon-text";
    commentIcon.innerHTML = `<i class="fas fa-comment"></i> ${blog.comments || 0}`;

    const likeIcon = document.createElement("div");
    likeIcon.className = "icon-text";
    likeIcon.innerHTML = `<i class="fas fa-heart"></i> ${blog.likes || 0}`;

    postActions.appendChild(commentIcon);
    postActions.appendChild(likeIcon);

    const commentSection = document.createElement("div");
    commentSection.className = "comment-section";

    const commentInputWrapper = document.createElement("div");
    commentInputWrapper.className = "comment-input-wrapper";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Write a comment...";

    const sendBtn = document.createElement("button");
    sendBtn.className = "send-comment-btn";
    sendBtn.textContent = ">";

    commentInputWrapper.appendChild(input);
    commentInputWrapper.appendChild(sendBtn);
    commentSection.appendChild(commentInputWrapper);

    blogCard.appendChild(postHeader);
    blogCard.appendChild(image);
    blogCard.appendChild(postContent);
    blogCard.appendChild(postActions);
    blogCard.appendChild(commentSection);

    blogContainer.appendChild(blogCard);
  });
});
