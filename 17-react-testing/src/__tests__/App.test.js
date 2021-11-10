import { AddTodo } from "../components/helper";

describe("test AddToDo", () => {
  test("Should add todo to the list", () => {
    // Arrange;
    const initialList = [
      {
        id: 1,
        name: "Learn JSX",
        isComplete: false,
      },
      {
        id: 2,
        name: "Build awasome react app",
        isComplete: false,
      },
    ];
    const newValue = {
      id: 3,
      name: "Learn login",
      isComplete: false,
    };

    // compare ARRAY LENGTH
    // const listNumber = initialList.length;
    // const expectedListNumber = listNumber + 1;
    // // Act
    // const actualListNumber = AddTodo(initialList, enteredValue).length;

    // // Assert
    // expect(actualListNumber).toBe(expectedListNumber);

    // compare OBJECT
    const expectedList = [newValue, ...initialList];
    const expectedStr = JSON.stringify(expectedList);

    // Act
    const actualList = AddTodo(initialList, newValue);
    const actualStr = JSON.stringify(actualList);

    // Assert
    expect(actualStr).toBe(expectedStr);
  });

  test("should not mutate the existing todo array", () => {
    // Arrange
    const initialList = [
      {
        id: 1,
        name: "Learn JSX",
        isComplete: false,
      },
      {
        id: 2,
        name: "Build awasome react app",
        isComplete: false,
      },
    ];

    const enteredValue = {
      id: 3,
      name: "Learn login",
      isComplete: false,
    };
    const expectedInitialStr = JSON.stringify(initialList);

    // Act
    const actualInitialList = AddTodo(initialList, enteredValue);
    const actualInitialStr = JSON.stringify(actualInitialList);

    // // Assert
    expect(actualInitialStr).not.toBe(expectedInitialStr);
  });
});
