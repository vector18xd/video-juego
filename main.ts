input.onGesture(Gesture.LogoUp, function () {
    if (personaje.get(LedSpriteProperty.Y) == 4) {
        personaje.set(LedSpriteProperty.Y, 0)
    } else {
        mover_abajo_arriba()
        personaje.move(1)
    }
})
function crer_rocas () {
    roca1 = game.createSprite(randint(0, 4), randint(0, 4))
    roca3 = game.createSprite(randint(0, 4), randint(0, 4))
    roca3 = game.createSprite(randint(0, 4), randint(0, 4))
}
input.onGesture(Gesture.TiltRight, function () {
    if (personaje.get(LedSpriteProperty.X) == 4) {
        personaje.set(LedSpriteProperty.X, 0)
    } else {
        mover_lados()
        personaje.move(1)
    }
})
function mover_lados () {
    if (personaje.get(LedSpriteProperty.Direction) == 180) {
        personaje.turn(Direction.Right, -90)
    }
}
input.onGesture(Gesture.TiltLeft, function () {
    if (personaje.get(LedSpriteProperty.X) == 0) {
        personaje.set(LedSpriteProperty.X, 4)
    } else {
        mover_lados()
        personaje.move(-1)
    }
})
function mover_abajo_arriba () {
    if (personaje.get(LedSpriteProperty.Direction) == 90) {
        personaje.turn(Direction.Right, 90)
    }
}
input.onGesture(Gesture.LogoDown, function () {
    if (personaje.get(LedSpriteProperty.Y) == 0) {
        personaje.set(LedSpriteProperty.Y, 4)
    } else {
        mover_abajo_arriba()
        personaje.move(-1)
    }
})
let roca3: game.LedSprite = null
let roca1: game.LedSprite = null
let personaje: game.LedSprite = null
personaje = game.createSprite(2, 2)
basic.forever(function () {
    basic.pause(100)
})
