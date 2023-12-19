
// let valueDisplays = document.querySelectorAll(".num");
// let interval = 4000;

// valueDisplays.forEach((valueDisplay) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function () {
//     startValue += 1;
//     valueDisplay.textContent = startValue;
//     if (startValue == endValue) {
//       clearInterval(counter);
//     }
//   }, duration);
// });

// Function to start counting
function startCounting() {
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 1000;

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
}

// Function to reset counts to zero
function resetCounts() {
  let valueDisplays = document.querySelectorAll(".num");
  valueDisplays.forEach((valueDisplay) => {
    valueDisplay.textContent = "0";
  });
}

// Intersection Observer configuration
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5, // Change this threshold value as needed
};

// Callback function when the observed element enters/exits the viewport
function onEntry(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Call the counting function when the observed element enters the viewport
      startCounting();
    } else {
      // Reset counts to zero when the observed element goes out of the viewport
      resetCounts();
    }
  });
}

// Create the Intersection Observer
const observer = new IntersectionObserver(onEntry, options);

// Observe the element with the 'second' class
const secondDiv = document.querySelector('.second');
observer.observe(secondDiv);
