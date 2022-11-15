for (let o = 0, l = array; o < l.length; o++) {
  var [type, ...rest] = l[o];
  {
    const type = 1;
    console.log(rest);console.log(type);
  }
}
