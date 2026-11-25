// Floating option switcher for the mockup (viewing tool, PeriscoPe styling, not part of the Cuross design).
// 01 = Hyper's own hero (index.html), 02 = Sleek's slider on the same page (index.html?hero=sleek).
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
  // room under the footer so the switcher never covers the last row of links
  const last = document.querySelector('footer > :last-child');
  if (last) last.style.paddingBottom = '64px';
})();
