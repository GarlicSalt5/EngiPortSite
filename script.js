
        // --- DATA ---
        const skills = [
            { name: "Matlab" },
            { name: "C" },
            { name: "Python" },
            { name: "Arduino microcontroller" }
        ];

        const projects = [
            {
                id: 3,
                title: "Project 3",
                short: "A short overview of the project goes here.",
                desc: "Detailed description of the project goes here. Replace this with real project details before sharing with recruiters.",
                tech: ["Tech 1", "Tech 2", "Tech 3"]
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

        function openModal(project) {
            mTitle.textContent = project.title;
            mDesc.textContent = project.desc;
            mTech.innerHTML = project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('');
            modal.classList.add('active');
        }

        if(closeModal) {
            closeModal.onclick = () => {
                modal.classList.remove('active');
            };
        }

        if(modal) {
            modal.onclick = (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            };
        }

        // --- EMAIL COPY LOGIC ---
        const emailBtn = document.getElementById('copy-email-btn');
        if (emailBtn) {
            emailBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const emailAddress = "ivanprestonengineering@gmail.com";
                
                try {
                    // Create hidden text field
                    const tempInput = document.createElement('textarea');
                    tempInput.style.position = 'absolute';
                    tempInput.style.left = '-9999px';
                    tempInput.value = emailAddress;
                    document.body.appendChild(tempInput);
                    
                    // Select and copy
                    tempInput.select();
                    document.execCommand('copy');
                    
                    // Remove field
                    document.body.removeChild(tempInput);

                    // Change UI to reflect success
                    emailBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    emailBtn.style.color = "var(--neon-green)";
                    emailBtn.style.borderColor = "var(--neon-green)";
                    
                    // Reset after 2.5 seconds
                    setTimeout(() => {
                        emailBtn.innerHTML = '<i class="fas fa-envelope"></i> Email Me';
                        emailBtn.style.color = "";
                        emailBtn.style.borderColor = "";
                    }, 2500);
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                }
            });
        }

        // --- SCROLL ANIMATION ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'all 0.6s ease-out';
            observer.observe(section);
        });

