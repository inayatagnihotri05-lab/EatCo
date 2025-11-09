// Simple animation: Smoothly appear each section as you scroll
const sections = document.querySelectorAll("section");

const appearOptions = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

sections.forEach(section => {
  appearOnScroll.observe(section);
});
