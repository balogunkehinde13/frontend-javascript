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
export function isDirector(employee: Employee): employee is Director {
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

