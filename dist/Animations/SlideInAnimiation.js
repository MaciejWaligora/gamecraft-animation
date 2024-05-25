"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideInAnimation = void 0;
const MoveAnimation_1 = require("./MoveAnimation");
class SlideInAnimation extends MoveAnimation_1.MoveAnimation {
    constructor(config) {
        config.endPosition = { y: config.target.y, x: config.target.x };
        config.target.y = 0 - config.target.height;
        super(config);
        this._easingFunction = (progress) => {
            return 1 - Math.pow(1 - progress, 2);
        };
    }
}
exports.SlideInAnimation = SlideInAnimation;
