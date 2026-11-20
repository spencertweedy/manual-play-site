// Spin the disc in the header's app icon when it's clicked or tapped, like flicking a record: quick to start, slow
// to stop. Clicking mid-spin adds another spin from wherever the disc is.
const spinButton = document.getElementById("spin-disc");
const disc = spinButton?.querySelector("img");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let spin = null;

spinButton?.addEventListener("click", () => {
  if (reduceMotion.matches) return;

  // Start from the disc's current angle, mid-spin or not.
  const current = parseFloat(getComputedStyle(disc).rotate) || 0;
  spin?.cancel();
  spin = disc.animate(
    [{ rotate: `${current % 360}deg` }, { rotate: `${(current % 360) + 720}deg` }],
    { duration: 1800, easing: "cubic-bezier(0.15, 0.6, 0.25, 1)", fill: "forwards" }
  );
});
