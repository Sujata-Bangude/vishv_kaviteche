
function toggleMenu() {
    const menu = document.querySelector('.navbar-items');
    menu.classList.toggle('active');
}


// Initialize counters for likes
let likeCounters = [0, 0, 0]; 

// Like Button Functionality
function likePoem(poemIndex) {
    likeCounters[poemIndex]++;
    document.getElementById('like-counter-' + poemIndex).textContent = likeCounters[poemIndex] + " Likes";
}

// Add comment functionality
function addComment(poemIndex) {
    const commentInput = document.getElementById('comment-input-' + poemIndex);
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        const commentsDiv = document.getElementById('comments-' + poemIndex);
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentsDiv.appendChild(newComment);
        
        // Clear input field after adding comment
        commentInput.value = '';
    } else {
        alert("Please enter a comment!");
    }
}



let likeCounters1 = [0, 0]; 

// Like Button Functionality for Blogs
function likeBlog(blogIndex) {
    likeCounters1[blogIndex]++; 
    document.getElementById('like-counter-' + blogIndex).textContent = likeCounters[blogIndex] + " Likes"; // Update the counter in the UI
}

// Add comment functionality for Blogs
function addComment(blogIndex) {
    const commentInput = document.getElementById('comment-input-' + blogIndex);
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        const commentsDiv = document.getElementById('comments-' + blogIndex);
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentsDiv.appendChild(newComment);
        
     
        commentInput.value = '';
    } else {
        alert("Please enter a comment!");
    }
}

