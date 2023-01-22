function createPhoneNumber(numbers) {
  let part1 = [];
  let part2 = [];
  let part3 = [];

  for (i = 0; i < numbers.length; i++) {
    if (i < 3) {
      part1.push(numbers[i]);
    } else if (i > 2 && i < 6) {
      part2.push(numbers[i]);
    } else {
      part3.push(numbers[i]);
    }
  }

  part1 = part1.toString();
  part2 = part2.toString();
  part3 = part3.toString();

  let k = 0;
  while (k < 4) {
    part1 = part1.replace(",", "");
    part2 = part2.replace(",", "");
    part3 = part3.replace(",", "");
    k++;
  }

  let phoneNumber = `(${part1}) ${part2}-${part3}`;
  return phoneNumber;
}
