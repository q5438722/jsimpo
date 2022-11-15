try {
  throw +[];
} catch (err) {
  console.log("it failed, but this code executes");
} finally {
  console.log("this code also executes");
}
