// Line icons (1.5 stroke), injected as an SVG sprite so both pages share them.
document.body.insertAdjacentHTML("afterbegin", `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
<symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></symbol>
<symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.2-3.6 4-5.4 7.5-5.4s6.3 1.8 7.5 5.4"/></symbol>
<symbol id="i-bag" viewBox="0 0 24 24"><path d="M5.5 8.5h13l-1 11.5h-11z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/></symbol>
<symbol id="i-down" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5"/></symbol>
<symbol id="i-left" viewBox="0 0 24 24"><path d="M14.5 6.5L9 12l5.5 5.5"/></symbol>
<symbol id="i-right" viewBox="0 0 24 24"><path d="M9.5 6.5L15 12l-5.5 5.5"/></symbol>
<symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13.5 6.5L19 12l-5.5 5.5"/></symbol>
<symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 6v12M6 12h12"/></symbol>
<symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path d="M5.5 12.5l4 4 9-9"/></symbol>
<symbol id="i-tooth" viewBox="0 0 24 24"><path d="M8 3.8c-2.6 0-4 2-4 4.6 0 2.4 1.2 3.6 1.7 5.6.6 2.4.8 6.2 2.6 6.2 1.6 0 1.6-4.4 3.7-4.4s2.1 4.4 3.7 4.4c1.8 0 2-3.8 2.6-6.2.5-2 1.7-3.2 1.7-5.6 0-2.6-1.4-4.6-4-4.6-1.6 0-2.5.9-4 .9s-2.4-.9-4-.9z"/></symbol>
<symbol id="i-badge" viewBox="0 0 24 24"><circle cx="12" cy="10" r="6"/><path d="M8.5 14.8L7.5 21l4.5-2.4 4.5 2.4-1-6.2"/><path d="M9.6 10l1.7 1.7 3.2-3.2"/></symbol>
<symbol id="i-tag" viewBox="0 0 24 24"><path d="M3.8 12.2V4.5h7.7l8.7 8.7-7.7 7.7z"/><circle cx="8" cy="8.7" r="1.3"/></symbol>
<symbol id="i-truck" viewBox="0 0 24 24"><path d="M2.8 6.5h11v10h-11zM13.8 10h4l2.9 3.2v3.3h-6.9"/><circle cx="7" cy="17.5" r="1.7"/><circle cx="17.3" cy="17.5" r="1.7"/></symbol>
<symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.3"/></symbol>
</svg>`);
window.icon = (n, cls = "ico") => `<svg class="${cls}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
