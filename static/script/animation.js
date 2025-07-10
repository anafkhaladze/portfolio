  const projects = document.querySelectorAll(".project");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = [...projects].indexOf(entry.target);
          entry.target.classList.add(index % 2 === 0 ? "animate-left" : "animate-right");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  projects.forEach(project => observer.observe(project));
