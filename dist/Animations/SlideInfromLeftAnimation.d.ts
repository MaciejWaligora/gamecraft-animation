import { MoveAnimation, MoveAnimationConfig } from "./MoveAnimation";
export interface SlideInFromLeftAninmationConfig extends MoveAnimationConfig {
}
export declare class SlideInFromLeftAninmation<Tconfig extends SlideInFromLeftAninmationConfig> extends MoveAnimation<SlideInFromLeftAninmationConfig> {
    constructor(config: Tconfig);
    protected _callback(delta: number): void;
}
