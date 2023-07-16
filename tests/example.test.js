import { describe, expect, it } from "vitest"
import { add } from "../src/shared"

describe("example test", () => {
  it("gives expected result", () => {
    const result = add(2, 2)

    expect(result).toBe(4)
  })
})
