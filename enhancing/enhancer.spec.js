const enhancer = require("./enhancer.js");
// test away!
describe("enhancer.js", () => {
  describe("enhancer", () => {
    describe("succeed", () => {
      it(
        "it should increase the items enhancement by 1 if the enhancement level is under 20",
        () => {
          expect(
            enhancer.succeed({
              name: "sword of a thousand truths",
              enhancement: 7,
              durability: 67
            })
          ).toEqual({
            name: "sword of a thousand truths",
            enhancement: 8,
            durability: 67
          });
        }
      );
    });
    describe("fail", () => {});
    describe("repair", () => {
      it("should receive an item and return it with it's durabilty set to 100", () => {
        expect(
          enhancer.repair({
            name: "sword of a thousand truths",
            enhancement: 7,
            durability: 67
          })
        ).toEqual({
          name: "sword of a thousand truths",
          enhancement: 7,
          durability: 100
        });
      });
    });
    describe("get", () => {
      it("should decrese an items durabilty by 5 if the enhancement level is lower than 15, 10 if it is greater, and if the enhancement level is over 16 the enhancement level should be decreased by 1", () => {
        expect(
          enhancer.fail({
            name: "sword of a thousand truths",
            enhancement: 7,
            durability: 67
          })
        ).toEqual({
          name: "sword of a thousand truths",
          enhancement: 7,
          durability: 62
        });
      });
    });
  });
});
