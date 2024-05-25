import { Animation, AnimationConfig } from "./Animations/Animation";
import * as PIXI from 'pixijs';
import { View, ViewConfig } from "gamecraft-view";
import { SpinAnimation, SpinAnimationConfig } from "./Animations/SpinAnimation";
import { ConstantMoveAnimation, ConstantMoveAnimationConfig } from "./Animations/ConstantMoveAnimation";
export type Direction = ('up' | 'down' | 'left' | 'right');
export interface AnimationManagerConfig {
    renderer: PIXI.Application;
}
export declare class AnimationManager<Tconfig extends AnimationManagerConfig> {
    private _animations;
    private _renderer;
    constructor(config: Tconfig);
    private _addAnimation;
    playLinearMoveAnimation(target: View<ViewConfig>, duration: number, endPosition: {
        x: number;
        y: number;
    }): void;
    playLinearMoveInfnitely(target: View<ViewConfig>, direction: Direction, speed: number): ConstantMoveAnimation<ConstantMoveAnimationConfig>;
    playTiltAnimation(target: View<ViewConfig>, duration: number): void;
    playSlideInAnimation(target: View<ViewConfig>, duration: number, onFinished?: () => void, scope?: Object): void;
    playPopAnimation(target: View<ViewConfig>, duration: number, targetScale: number): void;
    playSpinAnimation(target: View<ViewConfig>, numRotations: number, direction: boolean | undefined, duration: number, onFinished?: () => void, scope?: Object): SpinAnimation<SpinAnimationConfig>;
    playSlideInfromLeft(target: View<ViewConfig>, duration: number, onFinished?: () => void, scope?: Object): void;
    playSlideOutToRight(target: View<ViewConfig>, duration: number, onFinished?: () => void, scope?: Object): void;
    flushFinishedAnimations(): void;
    stopAnimation(animation: Animation<AnimationConfig>): void;
    update(delta: number): void;
}
