fetch("/api/pokemons")
  .then((res) => res.json())
  .then((data) => {
    console.log("pokemon:", data);
  });