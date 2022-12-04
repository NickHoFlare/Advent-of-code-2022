const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const individualTotalCaloriesList = getElfCaloriesList(data);
  console.log(Math.max(...individualTotalCaloriesList));
});

const getElfCaloriesList = data => {
  return data
    // replace all newlines with comma
    .replace(/\r\n/g, ',') 
    // lines that were originally empty should now appear as two commas together. 
    // Use this landmark to separate the lists of calories between each individual elf.
    .split(',,') 
    // For each elf's calories, split the comma separated values back into a list of individual values
    .map(csv => csv.split(','))
    // for each list of caloric values, sum the values.
    .map(list => list.reduce(
      (accum, current) => parseInt(accum) + parseInt(current), 
      0
    ));
    // At this point, we are left with a list of total caloric values for each elf.
}