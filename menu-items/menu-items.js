const menuItems = document.querySelectorAll('.menu-item');
const submitButton = document.getElementById('submit-comment');
const commentInput = document.getElementById('comment-input');
const commentSection = document.querySelector('.vcomments-box');

submitButton.addEventListener('click', () => {
  const comment = commentInput.value.trim();

  if (comment !== '') {
    // Create a new comment element
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.textContent = comment;

    // Append the new comment to the comment section
    commentSection.appendChild(newComment);

    // Clear the input field
    commentInput.value = '';
  }
});

menuItems.forEach((menuItem) => {
  const ratingContainer = menuItem.querySelector('.rating');
  const stars = ratingContainer.querySelectorAll('.star');

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      const menuItemId = menuItem.getAttribute('id');
      const selectedRating = index + 1;

      stars.forEach((s, i) => {
        if (i < selectedRating) {
          s.classList.remove('star-outline');
          s.classList.add('star-filled');
        } else {
          s.classList.remove('star-filled');
          s.classList.add('star-outline');
        }
      });

      console.log(`Menu item ID: ${menuItemId}, Rating: ${selectedRating}`);
      // You can perform further actions with the rating, such as sending it to a server or updating the UI.
    });
  });
});
  
