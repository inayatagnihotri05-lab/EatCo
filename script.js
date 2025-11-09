function checkEcoScore() {
  const food = document.getElementById("foodInput").value.toLowerCase();
  const result = document.getElementById("result");
  
  const scores = {
    beef: "🚫 High carbon footprint",
    chicken: "⚠️ Moderate impact",
    vegetables: "✅ Eco-friendly",
    tofu: "🌿 Very sustainable",
    rice: "⚠️ Water-intensive crop"
  };

  result.textContent = scores[food] || "🤔 No data available, try another food!";
}
