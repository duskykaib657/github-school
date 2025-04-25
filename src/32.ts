function calculateTotalCost(items: number[]): number {
  let totalCost = 0;

  // Add all items to total cost
  for (let i = 0; i < items.length; i++) {
    totalCost += items[i];
  }

  return totalCost;
}

// Example usage:
const items = [5.99, 3.99, 2.49]; // Replace with your actual item costs
console.log(`The total cost is: ${calculateTotalCost(items)}`); // Output will be the calculated total cost
