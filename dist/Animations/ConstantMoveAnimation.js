"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstantMoveAnimation = void 0;
const gamecraft_utils_1 = require("gamecraft-utils");
const Animation_1 = require("./Animation");
class ConstantMoveAnimation extends Animation_1.Animation {
    constructor(config) {
        super(config);
        this.positionChangedSignal = new gamecraft_utils_1.Signal();
        this._config = config;
        this._speed = config.speed;
        this._direction = config.direction;
    }
    getCurrentDirection() {
        return this._direction;
    }
    _callback(delta) {
        const currentPos = { x: this._target.x, y: this._target.y };
        this.positionChangedSignal.emit(currentPos);
        switch (this._direction) {
            case 'up':
                if (this._target.y < 0) {
                    this._target.y = this._config.maxY;
                }
                this._target.y -= this._speed;
                break;
            case 'down':
                if (this._target.y > this._config.maxY) {
                    this._target.y = 0;
                }
                this._target.y += this._speed;
                break;
            case 'left':
                if (this._target.x < 0) {
                    this._target.x = this._config.maxX;
                }
                this._target.x -= this._speed;
                break;
            case 'right':
                if (this._target.x > this._config.maxX) {
                    this._target.x = 0;
                }
                this._target.x += this._speed;
                break;
        }
    }
}
exports.ConstantMoveAnimation = ConstantMoveAnimation;
