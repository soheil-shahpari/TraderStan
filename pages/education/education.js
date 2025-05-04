fetch("../../text.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("title").textContent = data.title;
    document.getElementById("text").textContent = data.text;
  });
