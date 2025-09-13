/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// Import classes from namespace for easier access
import Cpp = Subjects.Cpp;
import Java = Subjects.Java;
import React = Subjects.React;
import Teacher = Subjects.Teacher;

// Step 1: Create and export constants for each subject
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Step 2: Create and export a Teacher object with C experience
export const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10
};

// Step 3: Test Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Step 4: Test Java subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Step 5: Test React subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());