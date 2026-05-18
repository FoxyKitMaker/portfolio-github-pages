document.addEventListener('DOMContentLoaded', () => {

    // 1. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeToggleMobile = document.getElementById('themeToggleMobile');
    const icons = document.querySelectorAll('.theme-icon, .theme-icon-mobile');

    function updateIcon(isDark) {
        icons.forEach(icon => {
            icon.style.transform = 'rotate(360deg) scale(0)';
            setTimeout(() => {
                if (isDark) {
                    icon.classList.remove('fa-moon', 'text-slate-700');
                    icon.classList.add('fa-sun', 'text-yellow-400');
                } else {
                    icon.classList.remove('fa-sun', 'text-yellow-400');
                    icon.classList.add('fa-moon', 'text-slate-700');
                }
                icon.style.transform = 'rotate(0deg) scale(1)';
            }, 250);
        });
    }

    // Init icon state
    updateIcon(document.documentElement.classList.contains('dark'));

    function toggleTheme() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateIcon(isDark);
    }

    themeToggleBtn.addEventListener('click', toggleTheme);
    themeToggleMobile.addEventListener('click', toggleTheme);


    // 2. Mobile Menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobilePanel = document.getElementById('mobileMenuPanel');
    const mobileIcon = mobileBtn.querySelector('i');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
        mobileBtn.setAttribute('aria-expanded', menuOpen);
        if (menuOpen) {
            mobileIcon.classList.replace('fa-bars', 'fa-times');
            mobilePanel.classList.remove('scale-y-0', 'opacity-0');
            mobilePanel.classList.add('scale-y-100', 'opacity-100');
        } else {
            mobileIcon.classList.replace('fa-times', 'fa-bars');
            mobilePanel.classList.remove('scale-y-100', 'opacity-100');
            mobilePanel.classList.add('scale-y-0', 'opacity-0');
        }
    }

    mobileBtn.addEventListener('click', toggleMenu);

    // Cerrar menú al clickear link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => { if (menuOpen) toggleMenu(); });
    });
    // Cerrar menú al clickear fuera
    document.addEventListener('click', (e) => {
        if (menuOpen && !mobilePanel.contains(e.target) && !mobileBtn.contains(e.target)) toggleMenu();
    });


    // 3. Scroll Progress Bar
    const progressBar = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height);
        progressBar.style.transform = `scaleX(${scrolled})`;
    });


    // 4. Navbar Background on Scroll & Scroll Spy
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Navbar shadow/blur
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }

        // Scroll Spy
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-indigo-600', 'dark:text-cyan-400');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('text-indigo-600', 'dark:text-cyan-400');
            }
        });
    });


    // 5. 3D Tilt Effect
    const tiltElements = document.querySelectorAll('.tilt-card');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
            const rotateY = ((x - centerX) / centerX) * 10;

            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });





    // 7. Hero Glow Mouse Tracking
    const hero = document.getElementById('inicio');
    const glow = document.getElementById('heroGlow');
    if (hero && glow) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
        });
        hero.addEventListener('mouseleave', () => {
            glow.style.left = '50%';
            glow.style.top = '50%';
        });
    }


    // 8. Apple Reveal (Scroll Staggered)
    const observerOptions = { threshold: 0.15, rootMargin: '0px' };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // Stagger children
                const children = entry.target.querySelectorAll('.reveal-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('active');
                    }, index * 150);
                });

                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


    // 9. Intelligent Typing Effect
    const roles = ["Desarrollador Multiplataforma", "Animador 3D", "UI/UX Enthusiast", "Frontend Developer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById('typingText');

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing
    setTimeout(type, 1000);

});