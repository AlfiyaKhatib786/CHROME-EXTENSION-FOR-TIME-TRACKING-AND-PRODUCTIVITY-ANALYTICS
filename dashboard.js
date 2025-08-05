fetch("/report")
  .then(res => res.json())
  .then(data => {
    const labels = Object.keys(data);
    const values = Object.values(data).map(ms => Math.round(ms / 60000)); // in minutes

    new Chart(document.getElementById("chart"), {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Time Spent (minutes)",
          data: values,
          backgroundColor: "steelblue"
        }]
      }
    });
  });
