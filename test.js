var assert = require('assert');

describe('Functional Programming Workshop', function() {
  
  describe('Pure Functions', function () {
    it('returns the days in the month', function () {
      // impure
      var daysThisMonth = function() {
        var date  = new Date();
        var year  = date.getFullYear();
        var month = date.getMonth();
        var start = new Date(year, month, 1);
        var end   = new Date(year, month + 1, 1);
        return Math.round((end - start) / (1000 * 60 * 60 * 24));
      };
      
      // impure
      var daysInMonth = function(year, month) {
        var start = new Date(year, month - 1, 1);
        var end   = new Date(year, month, 1);
        return Math.round((end - start) / (1000 * 60 * 60 * 24));
      };
      
      assert.equal(daysThisMonth(), daysInMonth(2016, 2));
    });
    
    it('returns the increment', function () {
      var counter = 0;

      // impure
      var increment = function() {
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
      var square = function() {
        x = x * 2;
        return x;
      };
      
      // pure
      // var square = function() {};
      
      assert.equal(square(), x * 2);
    });
  });
  
  describe('Map', function () {
    it('returns the square roots of the numbers', function() {
      var numbers = [1, 4, 9];
      var roots = numbers.map(function(number) {
          return Math.sqrt(number);
      });
      
      assert.deepEqual(roots, [1, 2, 3]);
    });
    
    it('returns the array of the grades', function () {
      var students = [
          {name: 'Anna',  grade: 6},
          {name: 'John',  grade: 4},
          {name: 'Maria', grade: 9}
      ];
      
      var grades = function() {};
      
      assert.deepEqual(grades(students), [6, 4, 9]);
    });
  });
  
  describe('Filter', function () {
    it('returns the numbers bigger than 4', function() {
      var numbers = [1, 4, 9];
      var filteredNumbers = numbers.filter(function(number) {
          return number > 4;
      });
      
      assert.deepEqual(filteredNumbers, [9]);
    });
    
    it('returns the students with the grade bigger than or equal to 6', function () {
      var students = [
          {name: 'Anna',  grade: 6},
          {name: 'John',  grade: 4},
          {name: 'Maria', grade: 9}
      ];
      
      var filterApprovedStudents = function() {};
      
      assert.deepEqual(filterApprovedStudents(), 
        [{name: 'Anna',  grade: 6},
         {name: 'Maria', grade: 9}]);
    });
  });
  
  describe('Map + Filter', function () {
    it('returns the names of the students with the grade bigger than or equal to 6', function () {
      var students = [
          {name: 'Anna',  grade: 6},
          {name: 'John',  grade: 4},
          {name: 'Maria', grade: 9}
      ];
      
      var filterApprovedStudentsByName = function() {};
      
      assert.deepEqual(filterApprovedStudentsByName(), ['Anna',  'Maria']);
    });
  });
  
});