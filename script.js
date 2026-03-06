/* ===== Mobile Navigation ===== */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/* ===== Smooth Scroll ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/* ===== Navbar scroll effect ===== */

/* ===== Contact Form ===== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('#name');
        const email = this.querySelector('#email');
        const subject = this.querySelector('#subject');
        const message = this.querySelector('#message');
        let valid = true;

        this.querySelectorAll('.form-error').forEach(el => el.remove());
        this.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

        if (!name.value.trim()) { showError(name, 'Моля, въведете име'); valid = false; }
        if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            showError(email, 'Моля, въведете валиден email'); valid = false;
        }
        if (!subject.value) { showError(subject, 'Моля, изберете тема'); valid = false; }
        if (!message.value.trim()) { showError(message, 'Моля, въведете съобщение'); valid = false; }

        if (valid) {
            const btn = this.querySelector('button[type="submit"]');
            btn.innerHTML = '<i class="fas fa-check"></i> Изпратено!';
            btn.disabled = true;
            setTimeout(() => {
                this.reset();
                btn.innerHTML = '<i class="fas fa-paper-plane"></i> Изпрати';
                btn.disabled = false;
            }, 2500);
        }
    });
}

function showError(input, msg) {
    input.classList.add('error');
    const err = document.createElement('span');
    err.className = 'form-error';
    err.textContent = msg;
    input.parentElement.appendChild(err);
}

/* ===== Scroll to Top ===== */
const scrollBtn = document.createElement('button');
scrollBtn.className = 'scroll-top';
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollBtn.setAttribute('aria-label', 'Нагоре');
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
