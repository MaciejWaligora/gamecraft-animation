import { MoveAnimation, MoveAnimationConfig } from "./MoveAnimation";
export interface SlideInAnimationConfig extends MoveAnimationConfig {
}
export declare class SlideInAnimation<Tconfig extends SlideInAnimationConfig> extends MoveAnimation<SlideInAnimationConfig> {
    constructor(config: Tconfig);
}
