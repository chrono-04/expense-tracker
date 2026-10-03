console.log("Just do it.");
let records = [
  {
    id: crypto.randomUUID,
    type: "expense",
    amount: 1500,
    category: "food",
    description: "Lunch",
    date: "2026-10-03",
  },
  {
    id: crypto.randomUUID(),
    type: "expense",
    amount: 4500,
    category: "transportation",
    description: "Gas",
    date: "2026-10-02",
  },
  {
    id: crypto.randomUUID(),
    type: "income",
    amount: 50000,
    category: "salary",
    description: "Monthly paycheck",
    date: "2026-10-01",
  },
  {
    id: crypto.randomUUID(),
    type: "expense",
    amount: 12000,
    category: "utilities",
    description: "Electricity and water bill",
    date: "2026-09-30",
  },
  {
    id: crypto.randomUUID(),
    type: "expense",
    amount: 8000,
    category: "entertainment",
    description: "Movie tickets and dinner",
    date: "2026-09-29",
  },
];

console.log(records);
