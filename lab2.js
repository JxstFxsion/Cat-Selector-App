 // Step 1: Declare a global variable to hold all cat breed data
let cats = [];

// Step 2: Fetch data from The Cat API when the page loads
// This fetches an array of cat breed objects in JSON format from the external API
fetch('https://api.thecatapi.com/v1/breeds')
  .then(response => response.json()) // Convert the response to JSON
  .then(data => {
    cats = data; // Store the result in the global 'cats' array for later use
    console.log("Cat data loaded successfully."); // Confirm data is loaded
  })
  .catch(error => {
    // Handle any errors that occur while fetching data
    console.error("Error fetching data:", error);
    document.getElementById("results").textContent = "Failed to load data.";
  });


// Function: Display names of all cat breeds
function showAllNames() {
  // Use 'map' to extract the name of each breed from the cat objects
  const output = cats.map(cat => cat.name).join('\n'); // Join names with line breaks

  // Display the names and the total count in the results area
  document.getElementById("results").textContent = `All Cat Names (Total: ${cats.length}):\n${output}`;
}


// Function: Filter and display cats by health issue number
function filterByHealth() {
  // Get the number entered by the user and convert it to an integer
  const input = parseInt(document.getElementById("healthInput").value);

  // Filter the cats to only include those with the specified number of health issues
  const filtered = cats.filter(cat => cat.health_issues === input);

  // Extract the names of the filtered cats
  const names = filtered.map(cat => cat.name).join('\n');

  // Display the result in the output area
  document.getElementById("results").textContent = `Cats with Health Issues = ${input}:\n${names}\nTotal: ${filtered.length}`;
}


// Function: Display weights of all cats based on the selected unit (imperial or metric)
function showWeights() {
  // Determine whether the user selected 'imperial' or 'metric'
  const unit = document.querySelector('input[name="unit"]:checked').value;

  // Extract and format the weights for each cat using the selected unit
  const weights = cats.map(cat => `${cat.name}: ${cat.weight[unit]}`).join('\n');

  // Display the formatted weight information
  document.getElementById("results").textContent = `Cat Weights (${unit.toUpperCase()}):\n${weights}`;
}


// Function: Display both intelligence and child-friendliness of each cat
function showIntelligenceFriendly() {
  // Combine intelligence and friendliness into a readable format for each cat
  const list = cats.map(cat => `${cat.name}: Intelligence = ${cat.intelligence}, Child Friendly = ${cat.child_friendly}`).join('\n');

  // Display the list
  document.getElementById("results").textContent = `Intelligence and Child Friendliness:\n${list}`;
}


// Function: Calculate and display the average intelligence of all breeds
function showAverageIntelligence() {
  // Sum up all intelligence values using reduce
  const total = cats.reduce((sum, cat) => sum + cat.intelligence, 0);

  // Calculate the average by dividing by the number of cats
  const avg = (total / cats.length).toFixed(2); // Rounded to 2 decimal places

  // Display the average
  document.getElementById("results").textContent = `Average Intelligence of All Cats: ${avg}`;
}


// Function: Display the average intelligence of cats with child_friendly = 4
function showAvgIntelligenceChildFriendly() {
  // Filter cats where child_friendly equals 4
  const filtered = cats.filter(cat => cat.child_friendly === 4);

  // If no cats match the condition, show a message
  if (filtered.length === 0) {
    document.getElementById("results").textContent = "No cats with child_friendly = 4.";
    return;
  }

  // Calculate the total intelligence of the filtered cats
  const total = filtered.reduce((sum, cat) => sum + cat.intelligence, 0);

  // Calculate the average intelligence
  const avg = (total / filtered.length).toFixed(2);

  // Display the average
  document.getElementById("results").textContent = `Average Intelligence (Child Friendly = 4): ${avg}`;
}
 
