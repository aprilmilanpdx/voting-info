window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
  let voter = document.getElementById("vote");
  voter.setAttribute("class", "hidden");
  let under18 = document.getElementById("under-18");
  under18.setAttribute("class", "hidden");

  const age = parseInt(document.querySelector("input#age").value);

  if (age >= 18)  {
    voter.removeAttribute("class");
  } else { 
      under18.removeAttribute("class");
    }
  };
};