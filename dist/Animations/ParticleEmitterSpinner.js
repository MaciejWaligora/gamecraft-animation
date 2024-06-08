"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticleEmitterSpinAnimation = void 0;
const SpinAnimation_1 = require("./SpinAnimation");
class ParticleEmitterSpinAnimation extends SpinAnimation_1.SpinAnimation {
    constructor(config) {
        super(config);
        this._rotation = 0;
        this._emitter = config.particleEmitter;
    }
    update(delta) {
        const angleChange = this._speed * delta;
        super.update(delta);
        if (!this._direction) {
            this._emitter.setDirection(this._rotation - 0.2, this._rotation + 0.2);
            this._rotation += angleChange;
            this._emitter.emitParticles(this._target.x, this._target.y, 100);
        }
        else {
            this._emitter.setDirection(this._rotation - 0.2, this._rotation + 0.2);
            this._rotation -= angleChange;
            this._emitter.emitParticles(this._target.x, this._target.y, 100);
        }
    }
}
exports.ParticleEmitterSpinAnimation = ParticleEmitterSpinAnimation;
