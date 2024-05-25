"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animation = void 0;
const gamecraft_utils_1 = require("gamecraft-utils");
class Animation {
    constructor(config) {
        this.onFinishedAnimationSignal = new gamecraft_utils_1.Signal();
        this._duration = config.duration;
        this._easingFunction = config.easingFunction ? config.easingFunction : (progress) => progress;
        this._target = config.target;
        this._elapsed = 0;
        this._finished = false;
        this._isInfinite = config.isInfinite ? config.isInfinite : false;
    }
    update(delta) {
        if (!this._finished) {
            this._elapsed += delta;
            const progress = Math.min(this._elapsed / this._duration, 1);
            const easedProgress = this._easingFunction(progress);
            this._callback(easedProgress);
            if (progress >= 1 && !this._isInfinite) {
                this._onAnimationFinished();
                this._finished = true;
            }
        }
    }
    _callback(delta) {
    }
    _onAnimationFinished() {
        this.onFinishedAnimationSignal.emit();
    }
    stop() {
        this._elapsed = this._duration;
        this._finished = true;
        this._onAnimationFinished();
    }
    isFinished() {
        return this._finished;
    }
}
exports.Animation = Animation;
