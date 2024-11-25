// Define themes
const themes = {
    blush: {
        name: "Blush",
        primary: "#E79C9C",
        secondary: "#B56B6B",
        background: "#FFF4F3",
        text: "#2F2E2E",
        border: "#D1A5A5"
    },
    dustyRose: {
        name: "Dusty Rose",
        primary: "#D48A88",
        secondary: "#8B5755",
        background: "#FBE9E7",
        text: "#2F2D2D",
        border: "#C5A9A8"
    },
    pink: {
        name: "Pink",
        primary: "#C75B7A",
        secondary: "#9A4160",
        background: "#F9EEF1",
        text: "#2C2E3A",
        border: "#B5B5B5"
    } ,
    black: {
        name: "Black",
        primary: "#2F2F2F", // Very soft black for primary elements
        secondary: "#3B3B3B", // Slightly lighter for secondary elements
        background: "#242424", // Dark gray for a smoother background
        text: "#D6D6D6", // Softer gray for text, less contrasty
        border: "#343434" // Smooth border that blends subtly
    }
};


// Populate theme selector
function populateThemeSelector() {
    const themeSelector = document.getElementById("themeSelector");
    themeSelector.innerHTML = ""; // Clear options
    Object.keys(themes).forEach(key => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = themes[key].name;
        themeSelector.appendChild(option);
    });
}

// Apply theme
function applyTheme(theme) {
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--background-color', theme.background);
    document.documentElement.style.setProperty('--text-color', theme.text);
    document.documentElement.style.setProperty('--border-color', theme.border);
}

// Save theme to localStorage
function saveTheme(themeKey) {
    localStorage.setItem("selectedTheme", themeKey);
}

// Event listener on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    const themeSelector = document.getElementById("themeSelector");

    populateThemeSelector(); // Populate selector

    // Load saved theme or default to "blush" if undefined
    const savedThemeKey = localStorage.getItem("selectedTheme") || "blush"; 
    themeSelector.value = savedThemeKey;

    // Apply theme if it exists, otherwise apply "blush" as a fallback
    const savedTheme = themes[savedThemeKey] || themes["blush"];
    applyTheme(savedTheme);

    // Listen for theme changes
    themeSelector.addEventListener("change", (event) => {
        const selectedThemeKey = event.target.value;
        const selectedTheme = themes[selectedThemeKey];
        applyTheme(selectedTheme);
        saveTheme(selectedThemeKey);
    });
});
