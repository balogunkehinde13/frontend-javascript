interface Director {
  firstName: string;
  lastName: string;
  workDirectorTasks(): string;
}

interface Teacher {
  firstName: string;
  lastName: string;
  workTeacherTasks(): string;
}

type Employee = Director | Teacher;

// ✅ Function: Type Predicate
function isDirector(employee: Employee): employee is Director {
  // You can check by the presence of `workDirectorTasks`
  return (employee as Director).workDirectorTasks !== undefined;
}

// ✅ Function: Execute Work
function executeWork(employee: Employee): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

const director: Director = {
  firstName: "John",
  lastName: "Doe",
  workDirectorTasks: () => "Getting to director tasks",
};

const teacher: Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  workTeacherTasks: () => "Getting to teacher tasks",
};

console.log(executeWork(director)); // Output: "Getting to director tasks"
console.log(executeWork(teacher));  // Output: "Getting to teacher tasks"