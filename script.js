function sortNumbers(numbers) {
  
    return numbers.slice().sort((a, b) => a - b);
  }
  
  // Example usage
  const unsortedNumbers = [3, 1, 4, 5, 2];
  const sortedNumbers = sortNumbers(unsortedNumbers);
  console.log(sortedNumbers);
  