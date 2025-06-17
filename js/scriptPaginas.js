document.addEventListener("DOMContentLoaded", function () {
  // Animação suave para os cards
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
    }, observerOptions);
    
    // Inicializar animações para cards de práticas
    document.querySelectorAll('.practice-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
    
    // Inicializar animações para cards de ferramentas
    document.querySelectorAll('.tool-card').forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateX(-20px)';
      card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });
    
    // Animação de contadores
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-item h3');
      
      counters.forEach(counter => {
          const target = counter.textContent;
          if (target.includes('3s')) return;
          if (target.includes('%')) {
              const num = parseInt(target);
              animateNumber(counter, 0, num, '%');
          } else if (target.includes('+')) {
              const num = parseInt(target.replace('+', '').replace('%', ''));
              animateNumber(counter, 0, num, '+', '%');
          }
      });
    };
    
    const animateNumber = (element, start, end, prefix = '', suffix = '') => {
      const duration = 2000;
      const range = end - start;
      const startTime = performance.now();
      
      const updateNumber = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const current = Math.floor(start + (range * progress));
          
          element.textContent = prefix + current + suffix;
          
          if (progress < 1) {
              requestAnimationFrame(updateNumber);
          }
      };
      
      requestAnimationFrame(updateNumber);
    };
    
    // Observer para stats
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounters();
              statsObserver.unobserve(entry.target);
          }
      });
    });
    
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }
});
