import * as PIXI from 'pixijs';
import { Animation, AnimationConfig } from './Animation';
export interface MoveAnimationConfig extends AnimationConfig {
    endPosition: {
        x: number;
        y: number;
    };
}
export declare class MoveAnimation<Tconfig extends MoveAnimationConfig> extends Animation<MoveAnimationConfig> {
    protected startPosition: PIXI.Point;
    protected endPosition: PIXI.Point;
    protected speed: number;
    constructor(config: Tconfig);
    protected _callback(delta: number): void;
}
