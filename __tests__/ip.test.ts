import { it, describe, expect } from "@jest/globals";
import ip from "../src";

describe("ip", () => {
    it("should return an IP address", () => {
        expect(ip()).toMatch(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/);
    });
});
