"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiltAnimation = void 0;
const PIXI = __importStar(require("pixijs"));
const Animation_1 = require("./Animation");
class TiltAnimation extends Animation_1.Animation {
    constructor(config) {
        super(config);
        this._targetRotation = 0.1;
        this._initialPos = { x: this._target.x, y: this._target.y };
        this._easingFunction = (progress) => {
            return 1 - Math.pow(1 - progress, 2);
        };
        this._initialRotation = config.target.rotation;
        this._rotationSpeed = this._targetRotation / config.duration * 3;
        const center = new PIXI.Point(config.target.width / 2, config.target.height / 2);
        this._target.x = this._target.x + config.target.width / 2;
        this._target.y = this._target.y + config.target.height / 2;
        this._target.pivot.copyFrom(center);
    }
    _callback(delta) {
        if (this._target.rotation < this._targetRotation) {
            this._targetRotation = 0.1;
            this._target.rotation += this._rotationSpeed * delta;
        }
        else if (this._target.rotation >= this._targetRotation) {
            this._targetRotation = 0;
            this._target.rotation -= this._rotationSpeed * delta;
        }
    }
    _onAnimationFinished() {
        super._onAnimationFinished();
        this._target.rotation = 0;
        this._target.x = this._initialPos.x;
        this._target.y = this._initialPos.y;
        this._target.pivot.x = 0;
        this._target.pivot.y = 0;
    }
}
exports.TiltAnimation = TiltAnimation;
