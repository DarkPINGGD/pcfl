export function calculateScore(position:number){
  if(position <= 1) return 1000
  return Math.max(1000 / position, 10)
}
