document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animations
    gsap.from("#left-container", {
      duration: 1.5,
      x: "-100%",
      ease: "power3.out",
      opacity: 0,
    });
  
    gsap.from("#right-container", {
      duration: 1.5,
      x: "100%",
      ease: "power3.out",
      opacity: 0,
      delay: 0.5,
    });
  
    gsap.from("#catimage", {
      duration: 1.5,
      scale: 0,
      ease: "back.out(1.7)",
      opacity: 0,
      delay: 1,
    });
  
    gsap.from("#container h2, #container p", {
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: 0.3,
      ease: "power2.out",
      delay: 1.5,
    });
  
    gsap.from("#dropdown-container", {
      duration: 1,
      scale: 0,
      ease: "elastic.out(1, 0.5)",
      opacity: 0,
      delay: 2,
    });
  });
  