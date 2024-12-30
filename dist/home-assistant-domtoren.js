const ICONS_MAP = {
  domtoren: {
    path: "M 9 16 L 15 16 L 15 24 L 9 24 Z M 9.5 17 a 0.5 0.5 0 0 1 1 0 v 1.5 h -1 v -1.5 Z M 11.5 17 a 0.5 0.5 0 0 1 1 0 v 1.5 h -1 v -1.5 Z M 13.5 17 a 0.5 0.5 0 0 1 1 0 v 1.5 h -1 v -1.5 Z M 9.5 19.5 a 0.5 0.5 0 0 1 1 0 v 1.5 h -1 v -1.5 Z M 11.5 19.5 a 0.5 0.5 0 0 1 1 0 v 1.5 h -1 v -1.5 Z M 13.5 19.5 a 0.5 0.5 0 0 1 1 0 v 1.5 h -1 v -1.5 Z M 11.5 22.5 a 0.5 0.5 0 0 1 1 0 v 1.5 h -1 v -1.5 Z M 9.5 8 L 14.5 8 L 14.5 16 L 9.5 16 Z M 10 9 a 0.4 0.4 0 0 1 0.8 0 v 6.5 h -0.8 v -1.5 Z M 11.6 9 a 0.4 0.4 0 0 1 0.8 0 v 6.5 h -0.8 v -1.5 Z M 13.2 9 a 0.4 0.4 0 0 1 0.8 0 v 6.5 h -0.8 v -1.5 Z M 10 2 L 14 2 L 14 8 L 10 8 Z M 10.5 3 a 0.3 0.3 0 0 1 0.6 0 v 4.5 h -0.6 v -1 Z M 11.7 3 a 0.3 0.3 0 0 1 0.6 0 v 4.5 h -0.6 v -1 Z M 12.9 3 a 0.3 0.3 0 0 1 0.6 0 v 4.5 h -0.6 v -1 Z M 10.5 2 L 12 0 L 13.5 2 Z",
    keywords: ["dom", "domtoren", "uuu"],
  },
};

async function getIcon(name) {
  return { path: ICONS_MAP[name].path };
}

async function getIconList() {
  return Object.entries(ICONS_MAP).map(([icon, content]) => ({
    name: icon,
    keywords: content.keywords,
  }));
}
window.customIcons = window.customIcons || {};
window.customIcons["dom"] = { getIcon, getIconList };

window.customIconsets = window.customIconsets || {};
window.customIconsets["dom"] = getIcon;

console.info(
  `%c HOME-ASSISTANT-DOMTOREN %c Version 0.0.1 `,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
