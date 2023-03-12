// Get the paragraph element
const paragraph = document.querySelector('p');

// Get the text content of the paragraph
const text = paragraph.textContent;

// Split the text into an array of words
const words = text.split(' ');

// Loop through the words
for (let i = 0; i < words.length; i++) {
  const word = words[i];

  // Check if the word is greater than 8 characters
  if (word.length > 8) {
    // Create a new span element to wrap the word
    const span = document.createElement('span');
    span.textContent = word;
    span.style.backgroundColor = 'yellow';

    // Replace the word with the span element
    words[i] = span.outerHTML;
  }
}

// Join the words back into a string and set the HTML of the paragraph element
paragraph.innerHTML = words.join(' ');
