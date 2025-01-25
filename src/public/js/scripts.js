// Initialize AOS for animations
AOS.init();


function goto(evt) {
  const link = $(evt).attr("link");
  window.open(link);
}