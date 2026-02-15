const cursor = document.querySelector('.glowing-cursor');

document.addEventListener('mousemove', (e) => {
    // Update top/left based on mouse clientX/clientY
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});



gsap.registerPlugin(ScrollTrigger);

/* ================= PRELOADER ================= */

window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");

  setTimeout(function() {
    preloader.classList.add("loader-hidden");
    document.body.style.overflow = "auto";
  }, 1000);
});


/* ================= MOBILE MENU ================= */

document.addEventListener('DOMContentLoaded', () => {

  const menuTrigger = document.getElementById('menuTrigger');
  const mobHeader = document.querySelector('.mob-header');

  menuTrigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('active');
    mobHeader.classList.toggle('open');
  });

  const mobLinks = document.querySelectorAll('.mob-a');
  mobLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuTrigger.classList.remove('active');
      mobHeader.classList.remove('open');
    });
  });


  /* ================= HEADER SCROLL ANIMATION ================= */

  const header = document.querySelector('header');

  const showAnim = gsap.from(header, { 
    yPercent: -120,
    paused: true,
    duration: 0.3
  }).progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      if (self.direction === -1) {
        showAnim.play();
      } else {
        showAnim.reverse();
      }
    }
  });


  /* ================= MARQUEE DIRECTION TOGGLE ================= */

  const control = document.getElementById("direction-toggle");
  const marquees = document.querySelectorAll(".marquee");
  const wrapper = document.querySelector(".wrapper");

  if (control) {
    control.addEventListener("click", () => {
      control.classList.toggle("toggle--vertical");
      wrapper.classList.toggle("wrapper--vertical");
      [...marquees].forEach((marquee) =>
        marquee.classList.toggle("marquee--vertical")
      );
    });
  }


  /* ================= TEAM CAROUSEL (FINAL WORKING VERSION) ================= */
/* ================= TEAM CAROUSEL (FINAL STABLE VERSION) ================= */

  const team = [
    {
      img: "./assets/img/M1.webp",
      quote: "Meticulous perfectionist always two steps ahead, double-checking every detail to ensure 180DC runs flawlessly end to end.",
      role: "President",
      name: "Vatsal Sarawagi"
    },
    {
      img: "./assets/img/M2.webp",
      quote: "Calm, mature, and effortlessly chill leader who stays composed under pressure and turns tense situations into ease.",
      role: "Vice-President",
      name: "Siddhant Gopalka"
    },
    {
      img: "./assets/img/Hey.webp",
      quote: "Warm, approachable, and universally loved, she embodies the spirit of 180DC and makes every room brighter.",
      role: "General Secretary",
      name: "Garima Ahuja"
    },
    {
      img: "./assets/img/M4.webp",
      quote: "Knowledgeable and thoughtful voice, always ready with constructive insights, balancing logic, clarity, and genuine care.",
      role: "Consulting Director",
      name: "Divisha"
    },
    {
      img: "./assets/img/M5.webp",
      quote: "Unpredictably creative yet reliable, he brings bold ideas, punctual execution, and relentless commitment until every task is complete.",
      role: "Marketing Director",
      name: "Bhavye Gattani"
    },
    {
      img: "./assets/img/M6.webp",
      quote: "Quiet yet confident, he builds instant client trust through professionalism, warmth, and a consistently positive presence.",
      role: "Client Acquisition Director",
      name: "Deepanshu"
    },
    {
      img: "./assets/img/M7.webp",
      quote: "Operations Director with strong domain knowledge and valuable connections, ensuring smooth execution and scalable organisational growth.",
      role: "Operations Director",
      name: "Kush Singla"
    }
  ];

  let index = 0;
  let interval;

  const img   = document.getElementById("teamImg");
  const quote = document.getElementById("teamQuote");
  const role  = document.getElementById("teamRole");
  const name  = document.getElementById("teamName");
  const box   = document.querySelector(".core-text");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const dotsBox = document.getElementById("dots");

  /* RUN ONLY IF CAROUSEL EXISTS */
  if (img && quote && role && name && box && dotsBox && nextBtn && prevBtn) {

    /* CREATE DOTS */
    team.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.addEventListener("click", () => {
        index = i;
        updateMember();
        resetAutoSlide();
      });
      dotsBox.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dots span");

    /* UPDATE FUNCTION */
    function updateMember() {
      box.classList.add("hide");

      setTimeout(() => {
        img.src = team[index].img;
        quote.textContent = team[index].quote;
        role.textContent = team[index].role;
        name.textContent = team[index].name;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");

        box.classList.remove("hide");
      }, 300);
    }

    /* BUTTONS */
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % team.length;
      updateMember();
      resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + team.length) % team.length;
      updateMember();
      resetAutoSlide();
    });

    /* AUTO SLIDE */
    function startAutoSlide() {
      interval = setInterval(() => {
        index = (index + 1) % team.length;
        updateMember();
      }, 4000);
    }

    function resetAutoSlide() {
      clearInterval(interval);
      startAutoSlide();
    }

    /* INIT */
    updateMember();
    startAutoSlide();
  }

}); 


document.addEventListener("DOMContentLoaded", () => {
  const projWrap = document.getElementById("projWrap");
  const projNextBtn = document.getElementById("projNextBtn");

  if (!projWrap || !projNextBtn) {
    console.log("projWrap or button not found");
    return;
  }

  projNextBtn.addEventListener("click", () => {
    const firstBox = projWrap.querySelector(".box");
    const gap = 32; // 2rem
    const scrollAmount = firstBox.offsetWidth + gap;

    projWrap.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
});



const servicesData = [
  {
    num: "1.",
    title: "Business Strategy & Growth",
    desc: "We collaborate with organizations to design structured, data-informed strategies that clarify long-term direction, refine value propositions, and unlock sustainable growth while strengthening brand positioning and stakeholder engagement across evolving markets",
    img: "./assets/img/1 Image.webp",
    tags: ["Branding Strategy", "Social Media Optimization", "Engagement Strategy"]
  },
  {
    num: "2.",
    title: "Market & Competitor Research",
    desc: "We conduct comprehensive research to analyze markets, understand customers, and benchmark competitors, helping organizations make evidence-based decisions that improve offerings, identify opportunities, and strengthen competitive advantages within rapidly changing industry landscapes.",
    img: "./assets/img/2 Image.webp",
    tags: ["Customer Surveys", "Market Analysis", "Industry Reports"]
  },
  {
    num: "3.",
    title: "Financial & Profitability Analysis",
    desc: "We assist organizations in improving product development cycles and operational processes by optimizing supply chains, enhancing team management systems, and guiding product-market fit, thereby increasing efficiency, reducing waste, and improving service delivery standards.",
    img: "./assets/img/3 Image.webp",
    tags: ["Pricing & Launch Strategy", "Prototyping & MVP Guidance"]
  },
  {
    num: "4.",
    title: "Product & Operational Optimization",
    desc: "We assist organizations in improving product development cycles and operational processes by optimizing supply chains, enhancing team management systems, and guiding product-market fit, thereby increasing efficiency, reducing waste, and improving service delivery standards.",
    img: "./assets/img/4 Image.webp",
    tags: ["Cost Benefit Analysis"]
  },
  {
    num: "5.",
    title: "Fundraising & Partnership Development",
    desc: "We help organizations build fundraising capacity and outreach pipelines by developing compelling pitch materials, identifying grant opportunities, and connecting with relevant stakeholders, ultimately strengthening financial sustainability and strategic partnerships for long-term growth.",
    img: "./assets/img/5 Image.webp",
    tags: ["Lead Generation", "Fundraising Strategies"]
  },
  {
    num: "6.",
    title: "Impact & Sustainability Consulting",
    desc: "We enable purpose-driven organizations to measure outcomes, maximize social value, and adopt sustainability practices through structured impact frameworks, performance indicators, and strategic guidance tailored to mission alignment and long-term societal benefit.",
    img: "./assets/img/6 Image.webp",
    tags: ["Sustainibility Consulting","Impact Maximization Strategy"]
  }
];

const container = document.getElementById("servicesContainer");

servicesData.forEach((service, index) => {
  const block = document.createElement("div");
  block.classList.add("service-grid");

  // alternate layout: even = normal, odd = reverse
  if (index % 2 !== 0) {
    block.classList.add("reverse");
  }

  block.innerHTML = `
    <img src="${service.img}" alt="${service.title}">
    <div class="service-grid-text">
      <div class="num">${service.num}</div>
      <h1>${service.title}</h1>
      <p>${service.desc}</p>
      <div class="tags">
        ${service.tags.map(tag => `<div class="tag-item glass-card">${tag}</div>`).join("")}
      </div>
    </div>
  `;

  container.appendChild(block);
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".service-grid").forEach(grid => {
  observer.observe(grid);
});

const stagger = document.querySelector(".stagger-meet");

const staggerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      stagger.classList.add("show");
      staggerObserver.unobserve(stagger); // run only once
    }
  });
}, { threshold: 0.3 });

staggerObserver.observe(stagger);

const counters = document.querySelectorAll(".count-up");

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;

    // Extract number + suffix (like +)
    const fullText = el.textContent.trim();
    const number = parseInt(fullText.replace(/\D/g, ""), 10);
    const suffix = fullText.replace(/[0-9]/g, "");

    const duration = 1000;
    const startTime = performance.now();

    function animateCount(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * number);

      el.textContent = value + suffix;

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        el.textContent = number + suffix;
      }
    }

    el.textContent = "0" + suffix;
    requestAnimationFrame(animateCount);
  });
}, {
  threshold: 0.6
});

counters.forEach(counter => {
  counterObserver.observe(counter);
});



// newsletter thing
document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("newsletterForm");
  const modal = document.getElementById("successModal");
  const loadingState = document.getElementById("modalLoading");
  const successState = document.getElementById("modalSuccess");

  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(form);

    // Open modal instantly
    modal.classList.add("active");

    // Ensure loading is visible
    loadingState.classList.remove("hidden");
    successState.classList.add("hidden");

    fetch(form.action, {
      method: "POST",
      body: data,
    })
    .then(response => {
  if (response.ok) {

    // Switch to success state
    loadingState.classList.add("hidden");
    successState.classList.remove("hidden");
    form.reset();

    // Auto close after 3 seconds
    setTimeout(() => {
      modal.classList.remove("active");
    }, 3000);

  } else {
    alert("Submission failed.");
    modal.classList.remove("active");
  }
})

    .catch(error => {
      alert("Error occurred.");
      modal.classList.remove("active");
    });
  });

});
