import { MoveAnimation, MoveAnimationConfig } from "./MoveAnimation";
export interface SlideOutToRightanimtaionConfig extends MoveAnimationConfig {
    screenWidth: number;
}
export declare class SlideOutToRightAnimtaion<Tconfig extends SlideOutToRightanimtaionConfig> extends MoveAnimation<SlideOutToRightanimtaionConfig> {
    constructor(config: Tconfig);
    protected _callback(delta: number): void;
}
