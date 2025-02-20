
function toggleMenu() {
    const menu = document.querySelector('.navbar-items');
    menu.classList.toggle('active');
}



// let likeCounters = [0, 0, 0]; 

// // Like Button Functionality
// function likePoem(poemIndex) {
//     likeCounters[poemIndex]++;
//     document.getElementById('like-counter-' + poemIndex).textContent = likeCounters[poemIndex] + " Likes";
// }

// // Add comment functionality
// function addComment(poemIndex) {
//     const commentInput = document.getElementById('comment-input-' + poemIndex);
//     const commentText = commentInput.value.trim();
    
//     if (commentText) {
//         const commentsDiv = document.getElementById('comments-' + poemIndex);
//         const newComment = document.createElement('p');
//         newComment.textContent = commentText;
//         commentsDiv.appendChild(newComment);
        
//         // Clear input field after adding comment
//         commentInput.value = '';
//     } else {
//         alert("Please enter a comment!");
//     }
// }



// let likeCounters1 = [0, 0]; 

// // Like Button Functionality for Blogs
// function likeBlog(blogIndex) {
//     likeCounters1[blogIndex]++; 
//     document.getElementById('like-counter-' + blogIndex).textContent = likeCounters[blogIndex] + " Likes"; // Update the counter in the UI
// }

// // Add comment functionality for Blogs
// function addComment(blogIndex) {
//     const commentInput = document.getElementById('comment-input-' + blogIndex);
//     const commentText = commentInput.value.trim();
    
//     if (commentText) {
//         const commentsDiv = document.getElementById('comments-' + blogIndex);
//         const newComment = document.createElement('p');
//         newComment.textContent = commentText;
//         commentsDiv.appendChild(newComment);
        
     
//         commentInput.value = '';
//     } else {
//         alert("Please enter a comment!");
//     }
// }


// Retrieve like counts from Local Storage or initialize them
let likeCounters = JSON.parse(localStorage.getItem('likeCounters')) || [0, 0, 0];


function likePoem(poemIndex) {
    likeCounters[poemIndex]++;
    document.getElementById('like-counter-' + poemIndex).textContent = likeCounters[poemIndex] + " Likes";
    
    localStorage.setItem('likeCounters', JSON.stringify(likeCounters));
}


window.onload = function() {
    for (let i = 0; i < likeCounters.length; i++) {
        let likeElement = document.getElementById('like-counter-' + i);
        if (likeElement) {
            likeElement.textContent = likeCounters[i] + " Likes";
        }
    }
};

// Function to add comment
function addComment(poemIndex) {
    const commentInput = document.getElementById('comment-input-' + poemIndex);
    const commentText = commentInput.value.trim();
    
    if (commentText) {
        let commentsDiv = document.getElementById('comments-' + poemIndex);
        let newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentsDiv.appendChild(newComment);

     
        let comments = JSON.parse(localStorage.getItem('comments-' + poemIndex)) || [];
        comments.push(commentText);
        localStorage.setItem('comments-' + poemIndex, JSON.stringify(comments));
        
       
        commentInput.value = '';
    } else {
        alert("Please enter a comment!");
    }
}

// Load comments when the page loads
window.onload = function() {
    for (let i = 0; i < likeCounters.length; i++) {
        let likeElement = document.getElementById('like-counter-' + i);
        if (likeElement) {
            likeElement.textContent = likeCounters[i] + " Likes";
        }

        // Load comments for each poem
        let comments = JSON.parse(localStorage.getItem('comments-' + i)) || [];
        let commentsDiv = document.getElementById('comments-' + i);
        if (commentsDiv) {
            comments.forEach(comment => {
                let newComment = document.createElement('p');
                newComment.textContent = comment;
                commentsDiv.appendChild(newComment);
            });
        }
    }
};

function likePoem(poemIndex) {
    alert("You liked this poem!"); 
}

function likeBlog(poemIndex) {
    alert("You liked this Blog!"); 
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    alert('Your message has been sent successfully!'); 

   
    this.submit(); 
  });


 