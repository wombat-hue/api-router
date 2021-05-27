import * as contract from '..';
import { storage, Context, VM, VMContext, logging } from "near-sdk-as";

describe("Task Add", () => {
  beforeAll(() => {
    // There can be some common setup for each test.
  });

  it("Reaches task threshold", () => {
    const result = contract.batch_task("mail", 20);
    expect(result).toBe(true);
  });

  it("Does NOT Reach task threshold", () => {
    const result = contract.batch_task("pony_express", 0);
    expect(result).toBe(false);
  });

});

