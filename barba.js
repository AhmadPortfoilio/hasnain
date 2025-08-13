 function pageEnterAnimation(data) {
      gsap.from(data.container.querySelector(".container"), {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
      });
    }

    function pageLeaveAnimation() {
      return gsap.to(".transition-overlay", {
        top: 0,
        duration: 0.8,
        ease: "power2.inOut"
      });
    }

    function pageEnterReveal() {
      return gsap.to(".transition-overlay", {
        top: "100%",
        duration: 0.8,
        ease: "power2.inOut"
      });
    }

    // Reveal transition overlay on FIRST page load
    window.addEventListener("load", () => {
      gsap.to(".transition-overlay", {
        top: "100%",
        duration: 1,
        ease: "power2.inOut"
      });
    });

    barba.init({
      transitions: [
        {
          name: "slide-bottom",
          async leave(data) {
            await pageLeaveAnimation();
            data.current.container.remove();
          },
          async enter(data) {
            pageEnterAnimation(data);
            await pageEnterReveal();
          },
          async once(data) {
            pageEnterAnimation(data);
          }
        }
      ]
    });