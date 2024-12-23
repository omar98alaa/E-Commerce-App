import { sum } from "./sum";

test("Properly adds 2 numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Properly adds 2 numbers", () => {
  expect(sum(10, 20)).toBe(30);
});

test("Properly adds 2 numbers", () => {
  expect(sum(15, 25)).toBe(40);
});

test("Properly adds 2 numbers", () => {
  expect(sum(-1, -2)).toBe(-3);
});
