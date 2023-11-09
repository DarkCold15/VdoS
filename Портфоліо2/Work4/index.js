function removeDuplicates(array) {
    const uniqueArray = [];
    
    for (const item of array) {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    }
    
    return uniqueArray;
  }
  
  const inputArray = [1, 2, 2, 3, 4, 4, 5];
  const resultArray = removeDuplicates(inputArray);
  
document.writeln('Масив без дублікатів:', resultArray);