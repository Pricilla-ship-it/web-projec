// Initial user data
let userPoints = 15; // Example user points (this would come from your backend in a real app)
let answerPoints = 5; // Points earned for each answer
let upvotes = 5; // Example upvotes on an answer

// Update points display on profile
function updatePoints() {
    document.getElementById("user-points").innerText = userPoints;
}

// Handle Answer Submission: Add points for answering
function submitAnswer() {
    // Add points for answering
    userPoints += answerPoints;
    // If the answer gets upvotes, add extra points
    if (upvotes >= 5) {
        userPoints += 5; // Bonus for 5+ upvotes
    }
    updatePoints();
    alert("Your answer has been submitted! Points awarded.");
}

// Handle Points Transfer
function transferPoints() {
    const pointsToTransfer = parseInt(document.getElementById("points-to-transfer").value);
    const recipientUsername = document.getElementById("recipient-username").value;
    const statusMessage = document.getElementById("transfer-status");

    if (isNaN(pointsToTransfer) || pointsToTransfer <= 0) {
        statusMessage.textContent = "Please enter a valid number of points to transfer.";
        return;
    }

    if (userPoints < pointsToTransfer) {
        statusMessage.textContent = "You do not have enough points to transfer.";
        return;
    }

    if (userPoints <= 10) {
        statusMessage.textContent = "You must have more than 10 points to transfer.";
        return;
    }

    // Subtract the points from the user's balance and add to recipient
    userPoints -= pointsToTransfer;
    statusMessage.textContent = `Successfully transferred ${pointsToTransfer} points to ${recipientUsername}.`;

    // Update the user's points
    updatePoints();
}

// Simulate Answer Removal or Downtime
function removeAnswer() {
    // Subtract points if the answer is removed
    userPoints -= answerPoints;
    if (upvotes >= 5) {
        userPoints -= 5; // Remove bonus points if the answer had upvotes
    }
    updatePoints();
    alert("Your answer has been removed! Points have been deducted.");
}

// Example: Simulate downtime of an answer
function simulateDowntime() {
    // Deduct points if the answer is in downtime
    userPoints -= answerPoints;
    if (upvotes >= 5) {
        userPoints -= 5; // Remove bonus points
    }
    updatePoints();
    alert("Your answer is in downtime! Points have been deducted.");
}

// Initialize the page with the current user's points
document.addEventListener("DOMContentLoaded", function() {
    updatePoints(); // Set initial points on page load

    // Button to submit an answer and receive points
    document.getElementById("submit-answer-btn").addEventListener("click", submitAnswer);

    // Button to simulate points transfer
    document.getElementById("transfer-button").addEventListener("click", transferPoints);

    // Simulate answer removal or downtime actions
    document.getElementById("remove-answer-btn").addEventListener("click", removeAnswer);
    document.getElementById("downtime-answer-btn").addEventListener("click", simulateDowntime);
});
