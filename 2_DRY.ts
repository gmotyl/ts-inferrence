// TODO: infer User type from user object

{
  type User = {
    id: number;
    name: string;
  };

  const user: User = {
    id: 3,
    name: "Foo",
  };

  const changeUserName = (userToEdit: User, age: number) => {
    userToEdit.name = age; // error expected: Type 'number' is not assignable to type 'string'
  };
}
