export default () => {
  const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
  const rootElement = document.documentElement;
  const TOGGLE_RATIO = 0.8;

  function handleScroll() {
    // do something on scroll
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > TOGGLE_RATIO) {
      // show button
      scrollToTopBtn.classList.add("showBtn");
    } else {
      // hide button
      scrollToTopBtn.classList.remove("showBtn");
    }
  }

  function scrollToTop() {
    // scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  scrollToTopBtn.addEventListener("click", scrollToTop);
  document.addEventListener("scroll", handleScroll);
};
