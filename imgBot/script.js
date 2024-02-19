/* // Function to fetch a random quote from They Said So Quotes API
async function fetchQuote() {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Miscellaneous?type=single"
    );
    const data = await response.json();
    return data.contents.quotes[0].quote;
  } catch (error) {
    console.error("Error fetching quote:", error);
    return "Failed to fetch quote. Please try again later.";
  }
}

// Function to update the quote and overlay it on the image
async function updateQuote() {
  const quoteText = document.getElementById("quote-text");
  const quoteImage = document.getElementById("quote-image");

  const quote = await fetchQuote();
  quoteText.textContent = quote;

  // You can replace "background_image.jpg" with the URL of your background image
  const imageUrl = "cartoon-characters-mordecai-and-rigby-stgu0vim5u4860f1.jpg"; // Replace with your image URL
  quoteImage.src = imageUrl;
  quoteImage.alt = "Daily Quote: " + quote;
}

// Run the updateQuote function when the page loads
window.onload = updateQuote;
 */
async function fetchFunnyQuote() {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Miscellaneous?type=single"
    );
    const data = await response.json();
    return data.joke;
  } catch (error) {
    console.error("Error fetching funny quote:", error);
    return "Failed to fetch funny quote. Please try again later.";
  }
}

async function updateFunnyQuote() {
  const quoteText = document.getElementById("quote-text");

  const quote = await fetchFunnyQuote();
  quoteText.textContent = quote;
}
document
  .getElementById("nextButton")
  .addEventListener("click", updateFunnyQuote);
window.onload = updateFunnyQuote;

/*
async function fetchSeriousQuote() {
  try {
    const response = await fetch("https://quotes.rest/qod?language=en");
    const data = await response.json();
    return data.contents.quotes[0].quote;
  } catch (error) {
    console.error("Error fetching serious quote:", error);
    return "Failed to fetch serious quote. Please try again later.";
  }
}

async function updateSeriousQuote() {
  const quoteText = document.getElementById("quote-text");

  const quote = await fetchSeriousQuote();
  quoteText.textContent = quote;
}

window.onload = updateSeriousQuote;
*/
