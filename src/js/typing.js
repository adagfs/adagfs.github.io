new TypeIt("#typewriter", {
  speed: 50,
  loop: true
}).pause(750)
  .type("Computer Science Student", {delay: 2000})
  .delete(null, {delay: 1000})
  .type("Junior Developer", {delay: 2000})
  .go();