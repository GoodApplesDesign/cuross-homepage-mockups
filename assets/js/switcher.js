// Floating option switcher for the mockup (viewing tool, PeriscoPe styling, not part of the Cuross design).
// 01 = Hyper's own hero (index.html), 02 = Sleek's slider on the same page (index.html?hero=sleek).
// It only changes the hero, so it shows while the hero is on screen and fades out once you scroll past it.
(() => {
  const params = new URLSearchParams(location.search);
  const here = params.get("hero") === "sleek" ? "b" : "a";
  const still = params.has("still");
  const link = (hero) => "index.html" + (hero === "b" ? "?hero=sleek" + (still ? "&still" : "") : (still ? "?still" : ""));
  const items = [["a", link("a"), "<span>01</span>Hyper hero"], ["b", link("b"), "<span>02</span>Sleek slider"]];
  const el = document.createElement("nav");
  el.className = "dswitch"; el.setAttribute("aria-label", "Hero options");
  el.innerHTML = items.map(([key, href, html]) => `<a href="${href}"${key === here ? ' class="on" aria-current="page"' : ""}>${html}</a>`).join("");
  document.body.appendChild(el);
  const hero = document.querySelector(here === "b" ? ".heroC" : ".hero");
  if (hero && "IntersectionObserver" in window)
    new IntersectionObserver(([e]) => el.classList.toggle("away", !e.isIntersecting)).observe(hero);
})();
