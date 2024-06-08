import { DirectionalExplosionEmitter ,  ParticleEmitterConfig} from "gamecraft-particle-system";
import { SpinAnimation, SpinAnimationConfig } from "./SpinAnimation";

export interface ParticleEmitterSpinAnimationConfig extends SpinAnimationConfig{
    particleEmitter: DirectionalExplosionEmitter;
}

export class ParticleEmitterSpinAnimation<Tconfig extends ParticleEmitterSpinAnimationConfig> extends SpinAnimation<ParticleEmitterSpinAnimationConfig>{

        private _emitter: DirectionalExplosionEmitter;
        private _rotation = 0;

        constructor(config: Tconfig){
            super(config);
            this._emitter = config.particleEmitter;
        }

        public update(delta: number): void {
            const angleChange = this._speed * delta;
            super.update(delta);

            if(!this._direction){
                this._emitter.setDirection(this._rotation-0.2, this._rotation+0.2);
                this._rotation += angleChange;
                this._emitter.emitParticles(this._target.x, this._target.y, 100);

            }else{
                this._emitter.setDirection(this._rotation-0.2, this._rotation+0.2);
                this._rotation -= angleChange;
                this._emitter.emitParticles(this._target.x, this._target.y, 100);
            }

        }

}

