// --- DATA ---
// Data structures defining skills and projects.
const skills = [
    { name: "C / C++", level: "10%" },
    { name: "Python", level: "85%" },
    { name: "Matlab / Simulink", level: "80%" },
    { name: "Microcontrollers", level: "70%" },
    { name: "skill", level: "100%" },
    { name: "skill", level: "0%" }
];

const projects = [
    {
        id: 1,
        title: "Smart Mirror",
        short: "Raspberry pi/micro controller based smart mirror",
        desc: "Desc",
        tech: ["Arduino", "Raspberry pi", "x", "y"]
    },
    {
        id: 2,
        title: "Automatic plant watering system",
        short: "short",
        desc: "desc",
        tech: ["arduino", "x", "y", "z"]
    },
    {
        id: 3,
        title: "Project 3",
        short: "short.",
        desc: "desc",
        tech: ["x", "y", "z", "a"]
    }
];

// --- RENDER SKILLS ---
const skillsContainer = document.getElementById('skills-container');
if(skillsContainer) {
    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'skill-card';
        div.innerHTML = `
            <div class="skill-name">${skill.name}</div>
            <div class="skill-level">
                <div class="skill-fill" style="width: ${skill.level}"></div>
            </div>
        `;
        skillsContainer.appendChild(div);
    });
}

// --- RENDER PROJECTS ---
const projectsGrid = document.getElementById('projects-grid');
if(projectsGrid) {
    projects.forEach(p => {
        const div = document.createElement('div');
        div.className = 'project-card';
        div.onclick = () => openModal(p);
        div.innerHTML = `
            <span class="folder-icon">&#128193;</span>
            <div class="project-title">${p.title}</div>
            <div class="project-desc">${p.short}</div>
            <div class="tech-stack-mini">
                ${p.tech.map(t => `<span>${t}</span>`).join('')}
            </div>
        `;
        projectsGrid.appendChild(div);
    });
}


// --- MODAL LOGIC ---
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const mTitle = document.getElementById('modal-title');
const mDesc = document.getElementById('modal-desc');
const mTech = document.getElementById('modal-tech');

/**
 * Opens the project details modal with content from the selected project object.
 * @param {Object} project - The project data object.
 */
function openModal(project) {
    mTitle.textContent = project.title;
    mDesc.textContent = project.desc;
    mTech.innerHTML = project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('');
    modal.classList.add('active');
}

// Attach event listener to close button
if(closeModal) {
    closeModal.onclick = () => {
        modal.classList.remove('active');
    };
}

// Close on background click
if(modal) {
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    };
}

// --- SCROLL ANIMATION (Simple Intersection Observer) ---
// Provides a subtle fade-in effect for sections as they scroll into view.
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    // Set initial off-screen state for animation
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});