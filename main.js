gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".homeinfo", 
  {
    x: -100, 
    opacity: 0
  }, 
  {
    x: 0,    
    opacity: 1,
    duration: 1.5, 
    ease: "bounce.out",
    scrollTrigger: {
      trigger: ".homeinfo",
      start: "top 98%",                
      toggleActions: "play none play none", 
    }
  }
);

gsap.fromTo(".aboutImg", 
    {
      x: 100, 
      scale:0
    }, 
    {
      x: 0,    
      scale:1,
      duration: 1.5, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".aboutImg",
        start: "top 100%",                
        toggleActions: "play reverse play reverse", 
      }
    }
  );

gsap.fromTo(".about", 
    {
      x: -120, 
      opacity: 0,
    //   scale:0
    }, 
    {
      x: 0,    
    //   scale:1,
      opacity: 1,
      duration: 1.5, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top 88%",                
        toggleActions: "play reverse play reverse", 
      }
    }
);

gsap.utils.toArray('.why').forEach(el => {
gsap.fromTo(el, 
    {
      opacity: 0,
      scale:0
    }, 
    {    
      scale:1,
      opacity: 1,
      duration: 1.5, 
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 100%",                
        toggleActions: "play reverse play reverse", 
      },
      markers: true,  
    }
    
)
});

gsap.utils.toArray('.service').forEach(el => {
    gsap.fromTo(el, 
        {
          opacity: 0,
          scale:0
        }, 
        {    
          scale:1,
          opacity: 1,
          duration: 1.5, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 100%",                
            toggleActions: "play reverse play reverse", 
          },
          markers: true,  
        }
        
    )
    });