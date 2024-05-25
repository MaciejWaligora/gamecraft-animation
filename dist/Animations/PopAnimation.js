"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopAnimation = void 0;
const Animation_1 = require("./Animation");
class PopAnimation extends Animation_1.Animation {
    constructor(config) {
        super(config);
        this._targetScale = config.targetScale;
        this._speed = (this._targetScale - this._target.scale.x) / config.duration * 7;
    }
    _callback(delta) {
        const scaleFactor = delta * this._speed;
        const scaleDiff = this._target.scale.x - 1;
        const positionChange = scaleDiff * (this._target.width / 2);
        if (this._target.scale.x < this._targetScale) {
            this._target.scale.set(this._target.scale.x + scaleFactor, this._target.scale.y + scaleFactor);
        }
        else {
            this._target.scale.set(this._target.scale.x - scaleFactor, this._target.scale.y - scaleFactor);
        }
    }
    _onAnimationFinished() {
        super._onAnimationFinished();
        this._target.scale.set(1, 1);
    }
}
exports.PopAnimation = PopAnimation;
