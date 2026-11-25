// Floating option switcher for the mockups (viewing tool, PeriscoPe styling, not part of the Cuross design).
// 01 = Hyper's own slideshow (hyper.html), 02 = Sleek's peeking carousel on the same page (hyper.html?hero=sleek).
(() => {
  const page = location.pathname.split("/").pop() || "index.html";
  const params = new URLSearchParams(location.search);
  const here = page === "hyper.html" ? (params.get("hero") === "sleek" ? "b" : "a") : page;
  const still = params.has("still");
  const link = (hero) => "hyper.html" + (hero === "b" ? "?hero=sleek" + (still ? "&still" : "") : (still ? "?still" : ""));
  const items = [
    ["index.html", "index.html", '<img src="assets/periscope/eye.png" alt="">', "All options"],
    ["a", link("a"), "<span>01</span>Slideshow", ""],
    ["b", link("b"), "<span>02</span>Carousel", ""]
  ];
  const el = document.createElement("nav");
  el.className = "dswitch"; el.setAttribute("aria-label", "Mockup options");
  el.innerHTML = items.map(([key, href, html, title]) => `<a href="${href}"${key === here ? ' class="on" aria-current="page"' : ""}${title ? ` title="${title}" aria-label="${title}"` : ""}>${html}</a>`).join("");
  document.body.appendChild(el);
  // room under the footer so the switcher never covers the last row of links
  const last = document.querySelector('footer > :last-child');
  if (last) last.style.paddingBottom = '64px';
})();
