export default function setTransition(t, i) {
  const s = this;
  if (!s.params.cssMode) {
    s.$wrapperEl.transition(t);
  }s.emit("setTransition", t, i);
}
