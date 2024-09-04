function calculateAge() {
  // Get input values
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value) - 1; // JS months are 0-based
  let year = parseInt(document.getElementById("year").value);

  // Get today's date
  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();
  let currentDay = today.getDate();

  // Calculate age
  let age = currentYear - year;

  // Adjust age if the birthdate hasn't occurred yet this year
  if (currentMonth < month || (currentMonth === month && currentDay < day)) {
    age--;
  }

  // Display the result
  document.getElementById("result").innerText =
    "You are " + age + " years old.";
}
