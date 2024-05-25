"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideInFromLeftAninmation = void 0;
const MoveAnimation_1 = require("./MoveAnimation");
class SlideInFromLeftAninmation extends MoveAnimation_1.MoveAnimation {
    constructor(config) {
        config.endPosition = { y: config.target.y, x: config.target.x };
        config.target.x = 0 - config.target.width;
        config.target.alpha = 0;
        super(config);
        this._easingFunction = (progress) => {
            return 1 - Math.pow(1 - progress, 2);
        };
    }
    _callback(delta) {
        super._callback(delta);
        this._target.alpha = delta;
    }
}
exports.SlideInFromLeftAninmation = SlideInFromLeftAninmation;
