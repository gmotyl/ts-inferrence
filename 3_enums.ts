{
  const user = {
    id: 3,
    name: "Foo",
    // TODO: Help the compiler to correctly infer state string as the enum optional type
    // valid states are "new", "pending" and "done"
    state: "new",
  };

  type User = typeof user;

  const changeUserName = (useToEdit: User, newName: string) => {
    useToEdit.name = newName;
    useToEdit.state = "pendingggggg"; // expected error: Type '"pendingggggg"' is not assignable to type '"null" | "pending" | "done"'
  };
}
