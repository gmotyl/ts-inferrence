{
  const user = {
    id: 3,
    name: "Foo",
    // Solution: If Typescript is not able to 100% correctly infer your static types,
    // you can help the compiler by defining a sub- value of an object with as syntax.
    state: "new" as "new" | "pending" | "done",
  };

  type User = typeof user;

  const changeUserName = (useToEdit: User, newName: string) => {
    useToEdit.name = newName;
    useToEdit.state = "pendingggggg"; // error: Type '"pendingggggg"' is not assignable to type '"null" | "pending" | "done"'
  };
}
