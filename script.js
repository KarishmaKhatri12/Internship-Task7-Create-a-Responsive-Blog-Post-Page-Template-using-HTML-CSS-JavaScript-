// Handle comment submission
document.getElementById("commentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();

  if (name && comment) {
    const commentList = document.getElementById("commentList");
    const newComment = document.createElement("p");
    newComment.innerHTML = `<strong>${name}</strong>: ${comment}`;
    commentList.prepend(newComment);

    this.reset();
  }
});

// Search filter for recent blogs
document.getElementById("searchBar").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const items = document.querySelectorAll("#recentBlogs li");

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "list-item" : "none";
  });
});
