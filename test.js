/// <reference path="typings/mocha/mocha.d.ts"/>

var assert = require('assert');

describe('Functional Programming Workshop', function () {

    describe('Pure Functions', function () {
        it('returns the days in the month', function () {
            // impure
            var daysThisMonth = function () {
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth();
                var start = new Date(year, month, 1);
                var end = new Date(year, month + 1, 1);
                return Math.round((end - start) / (1000 * 60 * 60 * 24));
            };
      
            // impure
            var daysInMonth = function (year, month) {
                var start = new Date(year, month - 1, 1);
                var end = new Date(year, month, 1);
                return Math.round((end - start) / (1000 * 60 * 60 * 24));
            };

            assert.equal(daysThisMonth(), daysInMonth(2016, 2));
        });

        it('returns the increment', function () {
            var counter = 0;

            // impure
            var increment = function () {
                counter = counter + 1;
                return counter;
            };
      
            // pure
            // var increment = function() {};
      
            assert.equal(increment(), counter + 1);
        });

        it('returns the square', function () {
            var x = 10;

            // impure
            var square = function () {
                x = x * 2;
                return x;
            };
      
            // pure
            // var square = function() {};
      
            assert.equal(square(), x * 2);
        });
    });

    describe('Map', function () {
        it('returns the square roots of the numbers', function () {
            var numbers = [1, 4, 9];
            var roots = numbers.map(function (number) {
                return Math.sqrt(number);
            });

            assert.deepEqual(roots, [1, 2, 3]);
        });

        it('returns the array of the grades', function () {
            var students = [
                { name: 'Anna', grade: 6 },
                { name: 'John', grade: 4 },
                { name: 'Maria', grade: 9 }
            ];

            var grades;

            assert.deepEqual(grades(students), [6, 4, 9]);
        });

        it('returns the array of the names', function () {
            var students = [
                { name: 'Anna', grade: 6 },
                { name: 'John', grade: 4 },
                { name: 'Maria', grade: 9 }
            ];

            var animals = [
                { name: 'Panda' },
                { name: 'Elephant' },
                { name: 'Dog' }
            ];

            var byNames;

            assert.deepEqual(byNames(students), ['Anna', 'John', 'Maria']);
            assert.deepEqual(byNames(animals), ['Panda', 'Elephant', 'Dog']);
        });
    });

    describe('Filter', function () {
        it('returns the numbers bigger than 4', function () {
            var numbers = [1, 4, 9];
            var filteredNumbers = numbers.filter(function (number) {
                return number > 4;
            });

            assert.deepEqual(filteredNumbers, [9]);
        });

        it('returns the students with the grade bigger than or equal to 6', function () {
            var students = [
                { name: 'Anna', grade: 6 },
                { name: 'John', grade: 4 },
                { name: 'Maria', grade: 9 }
            ];

            var filterApprovedStudents;

            assert.deepEqual(filterApprovedStudents(),
                [{ name: 'Anna', grade: 6 },
                    { name: 'Maria', grade: 9 }]);
        });
    });

    describe('Map + Filter', function () {
        it('returns the names of the students with the grade bigger than or equal to 6', function () {
            var students = [
                { name: 'Anna', grade: 6 },
                { name: 'John', grade: 4 },
                { name: 'Maria', grade: 9 }
            ];

            var filterApprovedStudentsByName;

            assert.deepEqual(filterApprovedStudentsByName(), ['Anna', 'Maria']);
        });
    });

    describe('Reduce', function () {
        it('returns the total sum', function () {
            var numbers = [1, 2, 3, 4];
            var sum = numbers.reduce(function (acc, current) {
                return acc + current;
            }, 0);

            assert.equal(sum, 10);
        });

        it('returns the combined names', function () {
            var students = [
                { name: 'Anna', grade: 6 },
                { name: 'John', grade: 4 },
                { name: 'Maria', grade: 9 }
            ];

            var combinedNames;

            assert.equal(combinedNames, 'AnnaJohnMaria');
        });

        it('returns the even numbers', function () {
            var numbers = [1, 2, 3, 4];

            var evenNumbers;

            assert.deepEqual(evenNumbers, [2, 4]);
        });
    });

    describe('Map + Filter + Reduce', function () {
        it('returns the total sum of the grades', function () {
            var students = [
                { name: 'Anna', grade: 6 },
                { name: 'John', grade: 4 },
                { name: 'Maria', grade: 9 }
            ];

            var totalSumOfTheGrades;

            assert.equal(totalSumOfTheGrades, 19);
        });
    });

    describe('Higher Order Functions', function () {
        it('returns the filtered students', function () {
            var students = [
                { name: 'Anna', grade: 6 },
                { name: 'John', grade: 4 },
                { name: 'Maria', grade: 9 }
            ];

            var filterGrade = function (student) {
                return student.grade > 6;
            };

            var filteredStudents = students.filter(filterGrade);

            assert.deepEqual(filteredStudents, [{ name: 'Maria', grade: 9 }]);
        });

        it('returns the calculation', function () {
            var sum = function (x, y) {
                return x + y;
            };

            var mult = function (x, y) {
                return x * y;
            };

            var calculate;

            assert.equal(calculate(sum, 10, 2), 12);
            assert.equal(calculate(mult, 10, 2), 20);
        });
    });

    describe('Currying', function () {
        it('returns the greeting', function () {
            var greet = function (greeting) {
                return function (name) {
                    return greeting + " " + name;
                };
            };

            var greetHello = greet("Hello");

            assert.equal(greetHello("Matheus"), "Hello Matheus");
        });

        it('returns the sum', function () {
            var sum; // x + y

            assert.equal(sum(2)(3), 6);
        });

        it('returns the volume', function () {
            var volume; // a * b * c

            assert.equal(volume(2)(3)(10), 60);
        });

        it('returns the object', function () {
            var student; // {firstName: 'Matheus', lastName: 'Lima', age: 26}
      
            assert.equal(student('Matheus')('Lima')(26), { firstName: 'Matheus', lastName: 'Lima', age: 26 });
        });
    });

    describe('Compose', function () {
        it('returns the capitalized to upper case string', function () {
            var compose = function (f, g) {
                return function (x) {
                    return f(g(x));
                };
            };

            var reverse = function (x) {
                return x.split("").reverse().join("");
            };

            var toUpperCase = function (x) {
                return x.toUpperCase();
            };

            var reversedUpperCase = compose(reverse, toUpperCase);

            assert.equal(reversedUpperCase('hello'), 'OLLEH');
        });

        it('returns the "angry" string', function () {
            var compose = function (f, g) {
                return function (x) {
                    return f(g(x));
                };
            };

            var angry;

            assert.equal(angry('hello'), 'HELLO!!!');
        });

        it('returns the number of words', function () {
            var compose = function (f, g) {
                return function (x) {
                    return f(g(x));
                };
            };

            var numberOfWords;

            assert.deepEqual(numberOfWords('hello my friend'), 3);
        });

        it('returns the "angry" reversed string', function () {
            var compose = function (f, g) {
                return function (x) {
                    return f(g(x));
                };
            };

            var angryReversed;

            assert.equal(angryReversed('hello'), '!!!OLLEH');
        });
    });

});