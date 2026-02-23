function getRecommendation(tempC) {
    if (tempC < 15) return "It's chilly! Grab a heavy jacket and maybe a beanie.";
    if (tempC >= 15 && tempC < 24) return "Mild weather. A light sweater or a denim jacket is perfect.";
    if (tempC >= 24 && tempC < 30) return "Warm and comfortable. T-shirt and jeans will do.";
    return "It is hot outside! Stick to shorts, a breathable t-shirt, and stay hydrated.";
}

module.exports = { getRecommendation };
