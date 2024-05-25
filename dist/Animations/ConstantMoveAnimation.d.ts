import { Direction } from "../AnimationManager";
import { Signal } from "gamecraft-utils";
import { Animation, AnimationConfig } from "./Animation";
export interface ConstantMoveAnimationConfig extends AnimationConfig {
    direction: Direction;
    speed: number;
    maxY: number;
    maxX: number;
}
export declare class ConstantMoveAnimation<Tconfig extends ConstantMoveAnimationConfig> extends Animation<ConstantMoveAnimationConfig> {
    private _speed;
    private _direction;
    private _config;
    positionChangedSignal: Signal<{
        x: number;
        y: number;
    }>;
    constructor(config: Tconfig);
    getCurrentDirection(): Direction;
    protected _callback(delta: number): void;
}
