// Floating direction switcher for the mockups (viewing tool, PeriscoPe styling, not part of the Cuross design).
(() => {
  const here = location.pathname.split("/").pop() || "index.html";
  const q = location.search.includes("still") ? "?still" : "";
  const items = [["index.html", '<img src="assets/periscope/eye.png" alt="">', "All directions"], ["hyper.html", "<span>01</span>Hyper", ""], ["sleek.html", "<span>02</span>Sleek", ""]];
  const el = document.createElement("nav");
  el.className = "dswitch"; el.setAttribute("aria-label", "Mockup directions");
  el.innerHTML = items.map(([href, html, title]) => `<a href="${href}${href === "index.html" ? "" : q}"${href === here ? ' class="on" aria-current="page"' : ""}${title ? ` title="${title}" aria-label="${title}"` : ""}>${html}</a>`).join("");
  document.body.appendChild(el);
  // room under the footer so the switcher never covers the last row of links
  const last = document.querySelector('footer > :last-child');
  if (last) last.style.paddingBottom = '64px';
})();
