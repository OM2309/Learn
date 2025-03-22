var destCity = function (paths) {
  const cities = new Set();

  // Collect outgoing cities
  for (const path of paths) {
    cities.add(path[0]);
  }

  console.log(cities);

  //   // Find destination city with no outgoing path
  for (const path of paths) {
    const dest = path[1];
    if (!cities.has(dest)) {
      return dest;
    }
  }

  return "";
};

console.log(
  destCity([
    ["London", "New York"],
    ["New York", "Lima"],
    ["Lima", "Sao Paulo"],
  ])
);
