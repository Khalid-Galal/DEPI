document.addEventListener("DOMContentLoaded", function() {
    const accordion = document.getElementById('accordionExample');
    const progressBar = document.getElementById('progressBar');
    const categoryFilter = document.getElementById('categoryFilter');

    // Load progress from localStorage or initialize
    let completedLectures = JSON.parse(localStorage.getItem('completedLectures')) || {};

    function updateProgress() {
        const totalLectures = lectureData.reduce((total, week) => total + week.lectures.length, 0);
        const completedCount = Object.values(completedLectures).filter(Boolean).length;
        const progressPercentage = (completedCount / totalLectures) * 100;
        
        // Update the progress bar
        progressBar.style.width = `${progressPercentage}%`;
        progressBar.setAttribute("aria-valuenow", progressPercentage);
        progressBar.textContent = `${Math.round(progressPercentage)}%`;
    }

    function renderLectures(filter = "All") {
        accordion.innerHTML = ""; // Clear the accordion content
    
        lectureData.forEach((item, index) => {
            const filteredLectures = item.lectures.filter(lecture => filter === "All" || lecture.category === filter);
    
            // Skip rendering if no lectures match the filter
            if (filteredLectures.length === 0) return;
    
            const itemHTML = `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${index === 0}" aria-controls="collapse${index}">
                            ${item.week}
                        </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            ${filteredLectures.map((lecture, lectureIndex) => {
                                const lectureId = `${item.week}-${lecture.label}`;
                                const isChecked = completedLectures[lectureId] ? 'checked' : '';
    
                                return `
                                    <div class="lecture-row d-flex justify-content-between align-items-center">
                                        <label class="form-check-label d-flex align-items-center" for="${lectureId}">
                                            <i class="bi ${lecture.type === 'Video' ? 'bi-play-circle-fill' : 'bi-file-earmark-arrow-down-fill'} me-2"></i> 
                                            <a href="${lecture.url}" target="_blank" class="text-decoration-none">${lecture.label}</a> <!-- Added anchor tag here -->
                                        </label>
                                        <input type="checkbox" class="form-check-input" id="${lectureId}" ${isChecked} onchange="toggleLectureCompletion('${lectureId}')">
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            `;
            accordion.innerHTML += itemHTML;
        });
    
        updateProgress(); // Update progress when rendering lectures
    }
    

    // Toggle lecture completion and update progress bar
    window.toggleLectureCompletion = function(lectureId) {
        completedLectures[lectureId] = !completedLectures[lectureId]; // Toggle completion
        localStorage.setItem('completedLectures', JSON.stringify(completedLectures));
        updateProgress();
    };

    // Filter lectures based on category selection
    categoryFilter.addEventListener('change', (event) => {
        renderLectures(event.target.value);
    });

    renderLectures(); // Initial render
});
