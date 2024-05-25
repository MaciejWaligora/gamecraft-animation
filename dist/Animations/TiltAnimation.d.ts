import { Animation, AnimationConfig } from './Animation';
export interface TiltAnimationConfig extends AnimationConfig {
}
export declare class TiltAnimation<Tconfig extends TiltAnimationConfig> extends Animation<TiltAnimationConfig> {
    private _initialRotation;
    private _rotationSpeed;
    private _targetRotation;
    private _initialPos;
    constructor(config: Tconfig);
    protected _callback(delta: number): void;
    protected _onAnimationFinished(): void;
}
