// const sections = document.querySelectorAll(".screen");
// const links = document.querySelectorAll(".nav-link");

// const cb = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
//       links.forEach((link) => link.classList.remove("active"));

//       const activeId = entry.target.id;
//       const activeLink = document.querySelector(
//         `.nav-link[href="#${activeId}"]`
//       );

//         activeLink.classList.add("active");

//     }
//   });
// };

// const sectionObserver = new IntersectionObserver(cb, {
//   threshold: [0.2, 0.5, 0.8]
// });

// sections.forEach((sec) => {
//   sectionObserver.observe(sec);
// });

// console.log(sections);
// console.log(links);