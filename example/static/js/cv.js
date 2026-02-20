const game = getById("game")
console.log(game)
const ctx = game.get2d()

console.log(ctx)

ctx.fillStyle = "#101010"
ctx.fillRect(0,0, 100, 100)