const countries = ["Brooklyn", "New York"];

export default (() => countries.map((name, id) => ({ id, name })))();
