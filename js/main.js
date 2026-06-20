/**
 * Hasnaa Salmouni Portfolio - Main JavaScript
 * Modern, performant, and accessible interactions
 */

(function() {
    'use strict';

    // ============================================
    // DOM Elements
    // ============================================
    const loader = document.getElementById('loader');
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    const themeToggle = document.getElementById('themeToggle');
    const scrollProgress = document.getElementById('scrollProgress');
    const backToTop = document.getElementById('backToTop');
    const particlesContainer = document.getElementById('particles');
    const typingText = document.getElementById('typingText');
    const contactForm = document.getElementById('contactForm');
    const contributionGrid = document.getElementById('contributionGrid');
    const projectSearch = document.getElementById('projectSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const statNumbers = document.querySelectorAll('.stat-number');
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    const modal = document.getElementById('demoModal');

    // ============================================
    // Initialization
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        initLoader();
        initNavbar();
        initTheme();
        initParticles();
        initTypingEffect();
        initScrollProgress();
        initBackToTop();
        initSmoothScroll();
        initActiveSection();
        initMobileMenu();
        initProjectFilters();
        initProjectSearch();
        initContactForm();
        initContributionGraph();
        initRevealAnimations();
        initStatCounters();
        initSkillBars();
    });

    // ============================================
    // Loading Screen
    // ============================================
    function initLoader() {
        window.addEventListener('load', function() {
            setTimeout(function() {
                loader.classList.add('hidden');
            }, 500);
        });
    }

    // ============================================
    // Navbar Scroll Effect
    // ============================================
    function initNavbar() {
        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        }, { passive: true });
    }

    // ============================================
    // Theme Toggle
    // ============================================
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }

        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // ============================================
    // Particle System
    // ============================================
    function initParticles() {
        if (!particlesContainer) return;

        const particleCount = 25;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 4 + 2;
            const left = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = Math.random() * 10 + 10;
            const opacity = Math.random() * 0.3 + 0.1;

            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${left}%;
                animation-delay: ${delay}s;
                animation-duration: ${duration}s;
                opacity: ${opacity};
            `;

            particlesContainer.appendChild(particle);
        }
    }

    // ============================================
    // Typing Effect
    // ============================================
    function initTypingEffect() {
        if (!typingText) return;

        const phrases = [
            'Computer Science Student',
            'Software Engineer',
            'Full-Stack Developer',
            'Python Enthusiast',
            'Problem Solver'
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            const currentPhrase = phrases[phraseIndex];

            if (isDeleting) {
                typingText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        }

        setTimeout(type, 1000);
    }

    // ============================================
    // Scroll Progress
    // ============================================
    function initScrollProgress() {
        if (!scrollProgress) return;

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        }, { passive: true });
    }

    // ============================================
    // Back to Top Button
    // ============================================
    function initBackToTop() {
        if (!backToTop) return;

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 500) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        }, { passive: true });

        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============================================
    // Smooth Scroll
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });

                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        });
    }

    // ============================================
    // Active Section Highlighting
    // ============================================
    function initActiveSection() {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(function(link) {
                        link.classList.remove('active');
                        if (link.getAttribute('data-section') === id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(function(section) {
            observer.observe(section);
        });
    }

    // ============================================
    // Mobile Menu
    // ============================================
    function initMobileMenu() {
        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // ============================================
    // Project Filters
    // ============================================
    function initProjectFilters() {
        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');

                filterBtns.forEach(function(b) { b.classList.remove('active'); });
                this.classList.add('active');

                projectCards.forEach(function(card) {
                    const categories = card.getAttribute('data-category') || '';

                    if (filter === 'all' || categories.includes(filter)) {
                        card.classList.remove('hidden');
                        card.style.animation = 'fadeInUp 0.5s ease forwards';
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    // ============================================
    // Project Search
    // ============================================
    function initProjectSearch() {
        if (!projectSearch) return;

        projectSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();

            projectCards.forEach(function(card) {
                const title = card.querySelector('.project-title').textContent.toLowerCase();
                const description = card.querySelector('.project-description').textContent.toLowerCase();
                const tags = Array.from(card.querySelectorAll('.project-tag')).map(function(tag) {
                    return tag.textContent.toLowerCase();
                }).join(' ');

                const matches = title.includes(searchTerm) || 
                                description.includes(searchTerm) || 
                                tags.includes(searchTerm);

                if (matches || searchTerm === '') {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    }

    // ============================================
    // Contact Form Validation
    // ============================================
    function initContactForm() {
        if (!contactForm) return;

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        const submitBtn = document.getElementById('submitBtn');
        const formSuccess = document.getElementById('formSuccess');

        function validateEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function showError(input, errorId) {
            input.classList.add('error');
            document.getElementById(errorId).classList.add('show');
        }

        function hideError(input, errorId) {
            input.classList.remove('error');
            document.getElementById(errorId).classList.remove('show');
        }

        function validateField(input, errorId, validator) {
            if (!validator(input.value)) {
                showError(input, errorId);
                return false;
            } else {
                hideError(input, errorId);
                return true;
            }
        }

        [nameInput, emailInput, subjectInput, messageInput].forEach(function(input) {
            input.addEventListener('input', function() {
                this.classList.remove('error');
                const errorEl = document.getElementById(this.id + 'Error');
                if (errorEl) errorEl.classList.remove('show');
            });
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const isNameValid = validateField(nameInput, 'nameError', function(v) { return v.trim().length >= 2; });
            const isEmailValid = validateField(emailInput, 'emailError', validateEmail);
            const isSubjectValid = validateField(subjectInput, 'subjectError', function(v) { return v.trim().length >= 3; });
            const isMessageValid = validateField(messageInput, 'messageError', function(v) { return v.trim().length >= 10; });

            if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
                submitBtn.classList.add('loading');

                // Simulate form submission
                setTimeout(function() {
                    submitBtn.classList.remove('loading');
                    contactForm.reset();
                    formSuccess.classList.add('show');

                    setTimeout(function() {
                        formSuccess.classList.remove('show');
                    }, 5000);
                }, 1500);
            }
        });
    }

    // ============================================
    // Contribution Graph
    // ============================================
    function initContributionGraph() {
        if (!contributionGrid) return;

        const weeks = 53;
        const daysPerWeek = 7;
        const levels = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4'];
        const colors = {
            'level-0': 'var(--border)',
            'level-1': 'rgba(124, 58, 237, 0.3)',
            'level-2': 'rgba(124, 58, 237, 0.5)',
            'level-3': 'rgba(124, 58, 237, 0.7)',
            'level-4': 'var(--primary)'
        };

        // Generate realistic contribution pattern
        for (let week = 0; week < weeks; week++) {
            for (let day = 0; day < daysPerWeek; day++) {
                const cell = document.createElement('div');
                cell.className = 'contribution-cell';

                // More recent weeks have higher activity
                const recency = week / weeks;
                const baseProbability = 0.1 + recency * 0.4;
                const random = Math.random();

                let level = 0;
                if (random < baseProbability) {
                    level = 1;
                } else if (random < baseProbability * 1.5) {
                    level = 2;
                } else if (random < baseProbability * 1.8) {
                    level = 3;
                } else if (random < baseProbability * 2) {
                    level = 4;
                }

                cell.style.backgroundColor = colors[levels[level]];
                cell.title = levels[level].replace('level-', '') + ' contributions';

                contributionGrid.appendChild(cell);
            }
        }
    }

    // ============================================
    // Reveal Animations (Intersection Observer)
    // ============================================
    function initRevealAnimations() {
        const revealElements = document.querySelectorAll('.section-header, .about-content, .about-stats, .skill-category, .project-card, .timeline-item, .experience-card, .github-stat-card, .github-repo-card, .contact-info, .contact-form-wrapper');

        const revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry, index) {
                if (entry.isIntersecting) {
                    setTimeout(function() {
                        entry.target.classList.add('visible');
                    }, index * 50);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(function(el) {
            el.classList.add('reveal');
            revealObserver.observe(el);
        });
    }

    // ============================================
    // Animated Stat Counters
    // ============================================
    function initStatCounters() {
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(function(stat) {
            counterObserver.observe(stat);
        });
    }

    function animateCounter(element, target) {
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOut);

            element.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target;
            }
        }

        requestAnimationFrame(update);
    }

    // ============================================
    // Animated Skill Bars
    // ============================================
    function initSkillBars() {
        const skillObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width + '%';
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        skillProgressBars.forEach(function(bar) {
            skillObserver.observe(bar);
        });
    }

    // ============================================
    // Modal Functions (Global)
    // ============================================
    window.showDemoModal = function(projectName) {
        const modalTitle = document.getElementById('modalTitle');
        const modalText = document.getElementById('modalText');

        if (modalTitle) modalTitle.textContent = projectName + ' - Live Demo';
        if (modalText) modalText.textContent = 'The live demo for ' + projectName + ' is currently being prepared. Please check back soon or view the source code on GitHub.';
        if (modal) modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    };

    window.closeDemoModal = function() {
        if (modal) modal.classList.remove('show');
        document.body.style.overflow = '';
    };

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            closeDemoModal();
        }
    });

})();
