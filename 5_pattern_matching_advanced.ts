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

  // Solution: Typescript & operator used for merging two Typescript’s data types
  type Elephant = typeof elephantExample & { type: "Elephant" };
  type Python = typeof pythonExample & { type: "Python" };
  type Whale = typeof whaleExample & { type: "Whale" };
  type Animal = Elephant | Python | Whale;

  const animalWhale: Animal = {
    type: "Whale",
    volume: 3,
  };
  const animalWhaleErr: Animal = {
    length: 100, // error: Type '{ length: number; type: "Whale"; }' is not assignable to type 'Animal'.
    // Object literal may only specify known properties, and 'length' does not exist in type 'Whale'.
    type: "Whale",
  };

  const printAnimalAttrs = (animal: Animal) => {
    // define custom business logic for each data type
    switch (animal.type) {
      case "Elephant":
        console.log(animal.trunkSize);
        console.log(animal.eyesColor);
        break;
      case "Python":
        console.log(animal.size); // error : Property 'size' does not exist on type 'Python'.ts(2339)
        break;
      case "Whale":
        console.log(animal.volume);
        break;
    }
  };
}
