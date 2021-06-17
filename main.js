const MOVE_SPEED = 100
const JUMP_FORCE = 350
const BIG_JUMP_FORCE = 600
let CURRENT_JUMP_FORCE = JUMP_FORCE
const ENEMY_SPEED = 20
const FALL_DEATH = 500

let isJumping = true

layers(['obj', 'ui'], 'obj')


//pause
