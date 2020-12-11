import { getName } from "./index";

describe("getName function", () => {
  test("should return the value of name property from object", () => {
    expect(getName({ name: 'Violet', age: 12 })).toEqual('Violet');
    expect(getName({ name: 'Count Olaf', age: 56 })).toEqual('Count Olaf');
    expect(getName({ name: 'Claus', age: 10 })).toEqual('Claus');
  });
});