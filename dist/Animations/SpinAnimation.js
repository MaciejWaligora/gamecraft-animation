"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinAnimation = void 0;
const Animation_1 = require("./Animation");
class SpinAnimation extends Animation_1.Animation {
    constructor(config) {
        super(config);
        this._initialPos = { x: this._target.x, y: this._target.y };
        this._alreadyspun = 0;
        this._direction = false; //false = clockwise, true = ocunter-clockwise
        this._numRotations = config.numRotations;
        this._totalAngle = this._numRotations * 4 * Math.PI;
        this._speed = this._totalAngle / config.duration;
        if (config.direction) {
            this._direction = config.direction;
        }
    }
    _callback(delta) {
        const angleChange = this._speed * delta;
        if (!this._direction) {
            this._target.rotation += angleChange;
        }
        else {
            this._target.rotation -= angleChange;
        }
        this._alreadyspun += angleChange;
        if (this._alreadyspun >= 2 * Math.PI * this._numRotations) {
            this.stop();
        }
    }
    _onAnimationFinished() {
        super._onAnimationFinished();
    }
}
exports.SpinAnimation = SpinAnimation;
