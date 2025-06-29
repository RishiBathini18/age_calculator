document.getElementById("age-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const dob = document.getElementById("dob").value;
  if (!dob) {
    document.getElementById("result").innerText = "Please select a valid date.";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  const resultText = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;

  document.getElementById("result").innerText = resultText;
});
