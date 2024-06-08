import { Animation, AnimationConfig } from "./Animation";
export interface SpinAnimationConfig extends AnimationConfig {
    numRotations: number;
    easingFunction: (progress: number) => number;
    direction?: boolean;
}
export declare class SpinAnimation<Tconfig extends SpinAnimationConfig> extends Animation<SpinAnimationConfig> {
    protected _numRotations: number;
    protected _totalAngle: number;
    protected _speed: number;
    protected _initialPos: {
        x: number;
        y: number;
    };
    protected _alreadyspun: number;
    protected _direction: boolean;
    constructor(config: Tconfig);
    protected _callback(delta: number): void;
    protected _onAnimationFinished(): void;
}
