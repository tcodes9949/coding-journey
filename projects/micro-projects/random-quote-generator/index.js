const quotes = [
  "Believe you can and you're halfway there.",
  "Small steps every day lead to big results.",
  "Don't give up on what you started.",
  "Your future is created by what you do today.",
  "Success starts with showing up.",
  "You don't have to be perfect to make progress.",
  "Keep going. You're closer than you think.",
  "Every expert was once a beginner.",
  "Make today count.",
  "The only way to fail is to stop trying."
];

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
  if (usedIndexes.size = quotes.length) {
    usedIndexes.clear()
  }

    while (true) {
     const randomIdx = Math.floor(Math.random() * quotes.length)

     if (usedIndexes.has(randomIdx)) continue

     const quote = quotes[randomIdx]
     quoteElement.innerHTML = quote;   
     usedIndexes.add(randomIndx)
     break

    }
 }
   
