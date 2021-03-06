const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

// default
describe('default', () => {
    it('runs the test', () => {})
});

// getBiggest
describe('getBiggest', () => {
    it('returns the greater number between x and y', () => {
        // arrange
        const getBiggest = funcs.getBiggest;

        // act
        const actual = getBiggest(4, 7);

        // assert
        expect(actual).toBeGreaterThan(4);
    })
})

// // greeting
// describe('greeting', () => {
//     it('should return a German greeting', () => {
//         // arrange
//         const greeting = funcs.greeting;

//         // act
//         const actual = greeting('German');

//         // assert
//         expect(actual).toBe('Guten Tag!')
//     })
//     it('should return a Spanish greeting', () => {
//         // arrange
//         const greeting = funcs.greeting;

//         // act
//         const actual = greeting('Spanish');

//         // assert
//         expect(actual).toBe('Hola!')
//     })
//     it('should return a English greeting', () => {
//         // arrange
//         const greeting = funcs.greeting;

//         // act
//         const actual = greeting('English');

//         // assert
//         expect(actual).toBe('Hello!')
//     })
// })

describe('greeting', () => {
    it('should check all the language greeting', () => {
      const getGreeting = funcs.greeting
  
      const german = getGreeting('German');
      const spanish = getGreeting('Spanish')
      const noLang = getGreeting();
  
      expect(german).toBe('Guten Tag!');
      expect(spanish).toBe('Hola!');
      expect(noLang).toBe('Hello!');
    })
})

describe('isTenOrFive', () => {
    it('checks if number is 10 or a 5', () => {
        // arrange
        const isTenOrFive = funcs.isTenOrFive;

        // act
        const actual = isTenOrFive(5)

        // assert 
        expect(actual).toBeTruthy()
    })
})

describe('isInRange', () => {
    it('check if num is between 20 and 50', () => {
        // arrange
        const isInRange = funcs.isInRange;

        // act
        const actual = isInRange(30);
        
        // assert
        expect(actual).toBeTruthy();
    })
})

describe('isInteger', () => {
    it('checks if it is number', () => {
        // arrange
        const isInteger = funcs.isInteger;

        // act
        const actual = isInteger(20);

        // assert
        expect(actual).toBeTruthy();
    })
})

describe('fizzBuzz', () => {
    it('checks if num is divisble by 5 or 3 evenly', () => {
        // arrange
        const fizzBuzz = funcs.fizzBuzz;
        const fb = 'fizzbuzz';
        const b = 'buzz';
        const f = 'fizz';

        // act
        const fizzbuzz = fizzBuzz(30);
        const buzz = fizzBuzz(25);
        const fizz = fizzBuzz(9);

        // assert
        expect(fizzbuzz).toBe(fb)
        expect(buzz).toBe(b)
        expect(fizz).toBe(f)
    })
})

describe('isPrime', () => {
    it('checks if num is a prime', () => {
        // arrange
        const isPrime = funcs.isPrime;

        // act
        const actual = isPrime(23)

        // assert
        expect(actual).toBeTruthy()
    })
})

describe('returnFirst', () => {
    it('returns the first element in an array', () => {

        // arrange
        const returnFirst = funcs.returnFirst;
        const expected = ['z'];

        // act
        const actual = returnFirst(expected);

        // assert
        expect(actual).toBe('z');
    })
})

describe('returnLast', () => {
    it('returns the last element in an array', () => {

        // arrange
        const returnLast = funcs.returnLast;
        const expected = ['z', 'm'];

        // act
        const actual = returnLast(expected);

        // assert
        expect(actual).toBe('m');
    })
})

describe('getArrayLength', () => {
    it('returns the amount of elements in an array', () => {

        // arrange
        const getArrayLength = funcs.getArrayLength;
        const expected = ['z', 'm'];

        // act
        const actual = getArrayLength(expected);

        // assert
        expect(actual).toEqual(2);
    })
})

describe('incrementByOne', () => {
    it('increment the elements in an array by 1', () => {

        // arrange
        const incrementByOne = funcs.incrementByOne;
        const expected = [1, 2, 3]

        // act
        const actual = incrementByOne(expected);

        // assert
        expect(actual).toEqual([2, 3, 4]);
    })
})

describe('addItemToArray', () => {
    it('add item to the end of an array', () => {

        // arrange
        const addItemToArray = funcs.addItemToArray;
        const expected = [1, 2, 3];
        const item = 4;

        // act
        const actual = addItemToArray(expected, item);

        // assert
        expect(actual).toEqual([1, 2, 3, 4]);
    })
})

describe('addItemToFront', () => {
    it('add an element to the front of an array', () => {

        // arrange
        const addItemToFront = funcs.addItemToFront;
        const expected = [1, 2, 3];
        const item = 4;

        // act
        const actual = addItemToFront(expected, item);

        // assert
        expect(actual).toEqual([4,1, 2, 3]);
    })
})

describe('wordsToSentence', () => {
    it('combines the elements in an array to a sentence', () => {

        // arrange
        const wordsToSentence = funcs.wordsToSentence;
        const words = ['yellow', 'tiger'];

        // act
        const actual = wordsToSentence(words);

        // assert
        expect(actual).toBe('yellow tiger');
    })
})

describe('contains', () => {
    it('checks if the item exist in the array', () => {

        // arrange
        const contains = funcs.contains;
        const expected = ['zebra', 'hippo', 'tiger'];
        const item = 'hippo';

        // act
        const actual = contains(expected, item);

        // assert
        expect(actual).toBeTruthy();
    })
})

describe('addNumbers', () => {
    it('adds the numbers to produce a sum', () => {

        // arrange
        const addNumbers = funcs.addNumbers;
        const expected = [4, 5, 6];

        // act
        const actual = addNumbers(expected);

        // assert
        expect(actual).toEqual(15);
    })
})

describe('averageTestScore', () => {
    it('averages the test scores in an array', () => {

        // arrange
        const averageTestScore = funcs.averageTestScore;
        const expected = [42, 20, 18, 30]

        // act
        const actual = averageTestScore(expected);

        // assert
        expect(actual).toEqual(27.5);
    })
})

describe('largestNumber', () => {
    it('finds the largest number in array', () => {

        // arrange
        const largestNumber = funcs.largestNumber;
        const expected = [42, 20, 18, 30]

        // act
        const actual = largestNumber(expected);

        // assert
        expect(actual).toBe(42);
    })
})







