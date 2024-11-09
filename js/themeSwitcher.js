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
    const savedTheme = localStorage.getItem("selectedTheme") || "lavender"; // Default theme
    themeSelector.value = savedTheme;
    applyTheme(themes[savedTheme]);

    // Listen for theme change
    themeSelector.addEventListener("change", (event) => {
        const selectedTheme = event.target.value;
        applyTheme(themes[selectedTheme]);
        saveTheme(selectedTheme);
    });
});
