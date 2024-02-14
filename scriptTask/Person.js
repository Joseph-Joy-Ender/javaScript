function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;

    this.setName = function (name){
        this.name = name;
    }

    this.setAge = function (age) {
        this.age = age;
    }

    this.setSex = function (sex) {
        this.sex = sex;

    }

    this.getName = function () {
        return this.name;
    }

    this.getAge = function () {
        return this.age;
    }

    this.getSex = function () {
        return this.sex;

    }
}

let person1 = new Person("Joy", 20, "Female");
console.log(person1.getName());
person1.setAge(20);
console.log(person1.getAge());
person1.setSex("Male");
console.log(person1.getSex());