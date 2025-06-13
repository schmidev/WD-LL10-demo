/* Task 1 - Complete the function according to the TODO */
function addComment(username, comment, addToStart) {}

/* Task 2 - Create your showWinnerMessage below according to the TODO */

/* Task 3 - Create your pickWinner below according to the TODO */

/* Task 4 - Complete the function according to the TODO */
function showRandomEmoji() {}

/* Task 5 - Complete the function according to the TODO */
function reverseOrder() {
  // This function reverses the order of the comments array
  // It uses the built-in reverse() method
  comments.reverse();
}

/* Task 6 - Complete the function according to the TODO */
function removeComment(index) {
  if (index > -1) {
    // only splice array when item is found
    comments.splice(index, 1); // 2nd parameter means remove one item only
  }
}

/* Task 7 - Complete the function according to the TODO */
function filterEmojiComments() {}

/* Level Ups */

/* Level Up - Task 8 - Complete the filterList function according to the TODO */
function filterList(searchTerm, searchUsers) {
  // This function returns a new array with comments that match the searchTerm
  // It checks both the username and the comment text
  // searchUsers is not used in this version, but could be used to filter only usernames if needed
  return comments.filter(comment => {
    // Split the comment into username and text
    const parts = comment.split(": ");
    const username = parts[0];
    const text = parts[1] || "";
    // Check if searchTerm is in the username or the comment text (case-insensitive)
    return username.toLowerCase().includes(searchTerm.toLowerCase()) ||
           text.toLowerCase().includes(searchTerm.toLowerCase());
  });
}

/* Level Up - Task 9 - Compelte the task according to the TODO */

/* Level Up - Task 10 - Add to the `addComment` function so that the an `@` sign is added to the username if there is not already one before it gets pushed into the array.  */
