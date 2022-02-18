var owl = $(".owl-one");
owl.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    960: {
      items: 2,
    },
    1200: {
      items: 4,
    },
  },
});
owl.on("mousewheel", ".owl-stage", function (e) {
  if (e.deltaY > 0) {
    owl.trigger("next.owl");
  } else {
    owl.trigger("prev.owl");
  }
  e.preventDefault();
});

var owlnews = $(".owl-two");
owlnews.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});

var owlservice = $(".owl-service");
owlservice.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    960: {
      items: 4,
    },
    1200: {
      items: 4,
    },
  },
});
