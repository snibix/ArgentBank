function nanoid(name) {
  return name + "-" + Math.floor(Math.random() * 10000);
}
export default nanoid;
