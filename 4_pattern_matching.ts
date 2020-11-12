{
  const elephantExample = {
    trunkSize: 10,
    eyesColor: "red",
  };
  const pythonExample = {
    length: 50,
  };
  const whaleExample = {
    volume: 30,
  };

  // TODO: get static types from values by using the typeof keyword.
  type Elephant = typeof elephantExample;
  type Python = typeof pythonExample;
  type Whale = typeof whaleExample;
  type Animal = Elephant | Python | Whale;

  const animalWhale: Animal = {
    volume: 3,
  };
}
