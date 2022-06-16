const cloneArray = require("./cloneArray")

test("properly clone an array", () => {
    const arr = [1, 2, 3, 4, 5]
    // not the same array, but two different arrays in memory
    expect(cloneArray(arr)).not.toBe(arr)
    // two different arrays in memory but with same data
    expect(cloneArray(arr)).toEqual(arr)
})
