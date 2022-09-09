export function getTotalScore(scores) {
  return scores.reduce((score, count) => score + count, 0);
}

export function getAvg(scores) {
  return getTotalScore(scores) / scores.length;
}

console.log(`Api base: ${process.env.API_BASE}`);
