const footprints = {
  rice: 2.7,
  chicken: 6.9,
  beef: 27.0,
  apple: 0.3,
  milk: 1.9,
  cheese: 13.5,
  potato: 0.4,
  lentils: 0.9,
  egg: 4.5,
  fish: 5.4
};

function checkFootprint() {
  const input = document.getElementById("foodInput").value.toLowerCase();
  const result = document.getElementById("result");
  
  if (footprints[input]) {
    result.innerHTML = `🌍 <b>${input}</b> produces about <b>${footprints[input]} kg of CO₂</b> per kg of food.`;
  } else if (input.trim() === "") {
    result.innerHTML = "Please type a food name 🌱";
  } else {
    result.innerHTML = `❓ Sorry, we don’t have data for "${input}". Try another item.`;
  }
}
