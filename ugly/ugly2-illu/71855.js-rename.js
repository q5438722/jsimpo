function getTemplate(e) {
  return require("./templates/" + e);
}console.log(getTemplate("a"));console.log(getTemplate("b"));
