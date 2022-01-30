/**
 * JS Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = {
	firstName: 'Name',
	lastName: 'Surname',
	getFullName() {
		return this.firstName + ' ' + this.lastName;
	}
};

/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
class Student{
	constructor(firstName, lastName, grade){
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = grade;
	}
	getFullName() {
		return this.firstName + ' ' + this.lastName;
	}
	getGrade(){
		return this.grade;
	}
}
const student = new Student('V', 'V', 3);

/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student);

module.exports = {
	person,
	student,
	student2
};