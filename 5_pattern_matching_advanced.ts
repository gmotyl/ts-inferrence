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

  // TODO: add a type attribute for each of our animals to make a unique standardized way
  //       of identifying an “instance” of the animal type and check the correctness of objects.
  type Elephant = typeof elephantExample;
  type Python = typeof pythonExample;
  type Whale = typeof whaleExample;
  type Animal = Elephant | Python | Whale;

  const animalWhale: Animal = {
    type: "Whale", // no errors expected
    volume: 3,
  };
  const animalWhaleErr: Animal = {
    length: 100, // expected error: Type '{ length: number; type: "Whale"; }' is not assignable to type 'Animal'.
    // Object literal may only specify known properties, and 'length' does not exist in type 'Whale'.
    type: "Whale", // no errors expected
  };

  const printAnimalAttrs = (animal: Animal) => {
    // define custom business logic for each data type
    switch (animal.type) {
      case "Elephant":
        console.log(animal.trunkSize); // no errors expected
        console.log(animal.eyesColor); // no errors expected
        break;
      case "Python":
        console.log(animal.size); // expected error : Property 'size' does not exist on type 'Python'.ts(2339)
        break;
      case "Whale":
        console.log(animal.volume); // no errors expected
        break;
    }
  };
}
