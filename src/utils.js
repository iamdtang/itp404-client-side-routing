export function isLinkActive({ isActive }) {
  const classes = ["nav-link"];

  if (isActive) {
    classes.push("active");
  }

  return classes.join(" ");
}
