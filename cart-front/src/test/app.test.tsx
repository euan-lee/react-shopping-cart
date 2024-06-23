import { render } from "@testing-library/react";
import { Test } from "./test";

describe("app test", () => {
  it("check render app ", () => {
    render(<Test />);
  });
  it("testing for the vitest", () => {
    expect(true).toBeTruthy();
  });
});
