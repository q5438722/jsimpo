for (let i = +[]; i < 5; i++) {
  const l = i;
  setTimeout(function() {
    console.log(l);
  }, 1);
}
