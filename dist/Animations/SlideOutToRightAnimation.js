"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideOutToRightAnimtaion = void 0;
const MoveAnimation_1 = require("./MoveAnimation");
class SlideOutToRightAnimtaion extends MoveAnimation_1.MoveAnimation {
    constructor(config) {
        config.endPosition = { y: config.target.y, x: config.screenWidth };
        super(config);
        this._easingFunction = (progress) => {
            return 1 - Math.pow(1 - progress, 2);
        };
    }
    _callback(delta) {
        super._callback(delta);
        this._target.alpha = 1 - delta;
    }
}
exports.SlideOutToRightAnimtaion = SlideOutToRightAnimtaion;
