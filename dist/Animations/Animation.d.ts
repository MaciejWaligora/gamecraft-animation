import { View, ViewConfig } from "gamecraft-view";
import { Signal } from 'gamecraft-utils';
export type AnimationCallback = (delta: number) => void;
export interface AnimationConfig {
    duration: number;
    easingFunction?: (progress: number) => number;
    target: View<ViewConfig>;
    isInfinite?: boolean;
}
export declare class Animation<Tconfig extends AnimationConfig> {
    onFinishedAnimationSignal: Signal<unknown>;
    protected _duration: number;
    protected _easingFunction: (progress: number) => number;
    protected _target: View<ViewConfig>;
    protected _elapsed: number;
    protected _finished: boolean;
    protected _isInfinite: boolean;
    constructor(config: Tconfig);
    update(delta: number): void;
    protected _callback(delta: number): void;
    protected _onAnimationFinished(): void;
    stop(): void;
    isFinished(): boolean;
}
