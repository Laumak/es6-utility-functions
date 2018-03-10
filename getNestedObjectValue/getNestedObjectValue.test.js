const getNestedObjectValue = require("./getNestedObjectValue")

describe("Get nested object value", () => {
  const nestedObject = {
    one: {
      two: {
        three: {
          four: {
            five: {
              six: {
                seven: {
                  eight: {
                    nine: {
                      ten: {
                        item: "depth 10",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      item: "depth 1"
    },
    item: "depth 0",
  }

  it("Should get a nested object value, object depth: 10", () => {
    const path = "one.two.three.four.five.six.seven.eight.nine.ten.item"

    expect(getNestedObjectValue(path, nestedObject)).toBe("depth 10")
  })

  it("Should get a nested object value, object depth: 1", () => {
    const path = "one.item"

    expect(getNestedObjectValue(path, nestedObject)).toBe("depth 1")
  })

  it("Should get a nested object value, object depth: 0", () => {
    const path = "item"

    expect(getNestedObjectValue(path, nestedObject)).toBe("depth 0")
  })
})