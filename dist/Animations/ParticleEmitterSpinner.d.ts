import { DirectionalExplosionEmitter } from "gamecraft-particle-system";
import { SpinAnimation, SpinAnimationConfig } from "./SpinAnimation";
export interface ParticleEmitterSpinAnimationConfig extends SpinAnimationConfig {
    particleEmitter: DirectionalExplosionEmitter;
}
export declare class ParticleEmitterSpinAnimation<Tconfig extends ParticleEmitterSpinAnimationConfig> extends SpinAnimation<ParticleEmitterSpinAnimationConfig> {
    private _emitter;
    private _rotation;
    constructor(config: Tconfig);
    update(delta: number): void;
}
