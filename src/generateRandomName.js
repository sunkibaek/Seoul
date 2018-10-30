const lastNameData = require("./korean_last_names.json");
const firstNameData = require("./korean_names.json");

export default function generateRandomName() {
  const genderIndex = Math.floor(Math.random() * 10) % 2;

  const firstNames =
    genderIndex === 1 ? firstNameData.femaleNames : firstNameData.maleNames;
  const lastNames = lastNameData.lastNames;

  const lastNameIndex = Math.floor(Math.random() * lastNames.length);
  const firstNameIndex = Math.floor(Math.random() * firstNames.length);

  const lastName = lastNames[lastNameIndex];
  const firstName = firstNames[firstNameIndex];

  return `${lastName}${firstName}`;
}
