document.documentElement.classList.add("js-ready");

const navLinks = document.querySelectorAll(".site-nav a[data-section]");
const jamesonSection = document.querySelector("#links");

function setActiveNav(section) {
    navLinks.forEach((link) => {
        if (link.dataset.section === section) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

function syncActiveNav() {
    if (!jamesonSection) {
        setActiveNav("jbox");
        return;
    }

    const sectionTop = jamesonSection.getBoundingClientRect().top;
    setActiveNav(sectionTop < window.innerHeight * 0.45 ? "jameson" : "jbox");
}

window.addEventListener("scroll", syncActiveNav, { passive: true });
window.addEventListener("hashchange", syncActiveNav);
syncActiveNav();
