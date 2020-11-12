// Solution: type-checking finds an issue in the code using just 2 lines of Typescript code!
{
  const user = {
    id: 3,
    name: "Foo",
  };
  type User = typeof user;

  const changeUserName = (userToEdit: User, age: number) => {
    userToEdit.name = age; // error: Type 'number' is not assignable to type 'string'
  };
}
