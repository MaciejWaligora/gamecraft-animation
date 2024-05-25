import { Animation, AnimationConfig } from "./Animation";
export interface SpinAnimationConfig extends AnimationConfig {
    numRotations: number;
    easingFunction: (progress: number) => number;
    direction?: boolean;
}
export declare class SpinAnimation<Tconfig extends SpinAnimationConfig> extends Animation<SpinAnimationConfig> {
    private _numRotations;
    private _totalAngle;
    private _speed;
    private _initialPos;
    private _alreadyspun;
    private _direction;
    constructor(config: Tconfig);
    protected _callback(delta: number): void;
    protected _onAnimationFinished(): void;
}
