module.exports = {
  succeed,
  fail,
  repair,
  get
};

// ### Items.

// - Items have `name`, `durability` and `enhancement`.
// - The item's `enhancement` it's a number from 0 to 20.
// - The item's `durability` it's a number from 0 to 100.

// ### When enhancement succeeds

// - The item's enhancement increases by 1.
// - If the item enhancement level is 20, the enhancement level is not changed.
// - The durability of the item is not changed.

// ### When enhancement fails

// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function succeed(item) {
  if(item.enhancement === 20) {
    return item
  } else {
    item.enhancement = item.enhancement + 1
  }
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) {
    if (item.durability >= 5) {
      item.durability = item.durability - 5;
    } else {
      item.durability = 0;
    }
  } else if (item.enhancement > 14) {
    if (item.durability >= 10) {
      item.durability = item.durability - 10;
    } else {
      item.durability = 0;
    }
  }
  if (item.enhancement > 16) {
    item.enhancement = item.enhancement - 1;
  }
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
