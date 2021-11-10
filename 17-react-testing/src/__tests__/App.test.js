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
    const enteredValue = {
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
    const expectedList = [
      {
        id: 3,
        name: "Learn login",
        isComplete: false,
      },
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

    // Act
    const actualList = AddTodo(initialList, enteredValue);

    const compareList = JSON.stringify(expectedList) === JSON.stringify(actualList);

    // Assert
    expect(true).toBe(compareList);
  });

  test("should not mutate the existing todo array", () => {
    // Arrange
    let initialList = [
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
    let enteredValue = {
      id: 3,
      name: "Learn login",
      isComplete: false,
    };
    let expectedInitialList = [
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

    // Act
    AddTodo(initialList, enteredValue);
    const actualInitialList = initialList;
    const initialListComparation = JSON.stringify(expectedInitialList) === JSON.stringify(actualInitialList);

    // // Assert
    expect(true).toBe(initialListComparation);
  });
});
