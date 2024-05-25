import { Animation, AnimationConfig } from "./Animation";
export interface PopAnimationConfig extends AnimationConfig {
    targetScale: number;
}
export declare class PopAnimation<Tconfig extends PopAnimationConfig> extends Animation<PopAnimationConfig> {
    private _targetScale;
    private _speed;
    constructor(config: Tconfig);
    protected _callback(delta: number): void;
    protected _onAnimationFinished(): void;
}
