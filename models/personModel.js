class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

  
  }

  present = () => {
    return `${this.name} is ${this.age} years old, and a${this.gender}`;
  }
  
}

export default Person;
  
