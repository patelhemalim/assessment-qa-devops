const {shuffleArray} = require('./utils')

let testData = [2,4,6,23,454,345]
  
describe('shuffleArray tests', () => {
    const shuffledArray = shuffleArray(testData)

    test('length of shuffledarray is array',()=>{
        expect(shuffledArray).toBeInstanceOf(Array)
    });

    test('length of shuffledarray is same as test data',()=>{
        expect(shuffledArray.length).toBe(testData.length);
    });

    test('check that all items are in the array',()=>{
        expect(shuffledArray).toEqual(expect.arrayContaining(testData));
    });
   
});
test("should run", () => expect(2).toBe(2));