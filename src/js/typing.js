new TypeIt("#typewriter", {
  speed: 50,
  loop: true
}).pause(750)
  .type("Computer Science Major", {delay: 2000})
  .delete(null, {delay: 1000})
  .type("Data Science Minor", {delay: 2000})
  .delete(null, {delay: 1000})
  .type("Software Developer", {delay: 2000})
  .delete(null, {delay: 1000})
  .type("Data Analyst", {delay: 2000})
  .go();