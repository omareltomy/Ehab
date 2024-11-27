class Calculator {
    constructor() {
      // Get the screen (to display input) and buttons container from the HTML
      this.screen = document.getElementById("screen");
      this.buttonsContainer = document.getElementById("buttons");
  
      // Store the user's current input (what's typed into the calculator)
      this.currentInput = "";
  
      // Create the calculator buttons dynamically
      this.createButtons();
    }
  
    // Method to create all calculator buttons
      // Create all calculator buttons
  createButtons() {
    // Define button labels for the calculator
    const buttonLabels = ["1", "2", "3", "+", 
                          "4", "5", "6", "-", 
                          "7", "8", "9", "*", 
                          "C", "0", ".", "=", "/"];

    // Loop through each label to create buttons
    for (const label of buttonLabels) {
      const button = document.createElement("button"); // Create a button
      button.textContent = label; // Set its text to the label
      button.className = "button"; // Add a class for styling

      // Add click event to handle what happens when the button is clicked
      button.addEventListener("click", () => this.handleButtonClick(label));

      // Add the button to the buttons container
      this.buttonsContainer.appendChild(button);
    }
  }

  
    // Method to handle button clicks
    handleButtonClick(value) {
      if (value === "C") {
        // Clear the current input when "C" is pressed
        this.currentInput = "";
      } else if (value === "=") {
        // Calculate the result when "=" is pressed
        this.calculateResult();
      } else {
        // Add the button's value to the current input
        this.currentInput += value;
      }
  
      // Update the screen with the new input or result
      this.updateScreen();
    }
  
    // Method to update the screen with the current input
    updateScreen() {
      this.screen.textContent = this.currentInput || "0"; // Show "0" if input is empty
    }
  
    // Method to calculate the result of the input
    calculateResult() {
      try {
        // Use eval to calculate the result (only works for simple math)
        this.currentInput = eval(this.currentInput).toString();
      } catch {
        // Show "Error" if the calculation fails (e.g., invalid input)
        this.currentInput = "Error";
      }
    }
  }
  
  // Initialize the calculator when the page loads
  new Calculator();
  