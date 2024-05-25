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
exports.MoveAnimation = void 0;
const PIXI = __importStar(require("pixijs"));
const Animation_1 = require("./Animation");
class MoveAnimation extends Animation_1.Animation {
    constructor(config) {
        super(config);
        this.startPosition = new PIXI.Point(config.target.x, config.target.y);
        this.endPosition = new PIXI.Point(config.endPosition.x, config.endPosition.y);
        const currentX = this.startPosition.x;
        const currentY = this.startPosition.y;
        const dx = this.endPosition.x - currentX;
        const dy = this.endPosition.y - currentY;
        this.speed = Math.sqrt((dx * dx) + (dy * dy)) / this._duration;
    }
    _callback(delta) {
        const currentX = this.startPosition.x;
        const currentY = this.startPosition.y;
        // Calculate the distance to move on each axis
        const dx = this.endPosition.x - currentX;
        const dy = this.endPosition.y - currentY;
        const angle = Math.atan2(dy, dx);
        const vx = Math.cos(angle) * this.speed;
        const vy = Math.sin(angle) * this.speed;
        const newX = this.startPosition.x + (this.endPosition.x - this.startPosition.x) * delta;
        const newY = this.startPosition.y + (this.endPosition.y - this.startPosition.y) * delta;
        this._target.position.set(newX, newY);
    }
}
exports.MoveAnimation = MoveAnimation;
