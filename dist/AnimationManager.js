"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationManager = void 0;
const MoveAnimation_1 = require("./Animations/MoveAnimation");
const TiltAnimation_1 = require("./Animations/TiltAnimation");
const SlideInAnimiation_1 = require("./Animations/SlideInAnimiation");
const PopAnimation_1 = require("./Animations/PopAnimation");
const SpinAnimation_1 = require("./Animations/SpinAnimation");
const SlideInfromLeftAnimation_1 = require("./Animations/SlideInfromLeftAnimation");
const SlideOutToRightAnimation_1 = require("./Animations/SlideOutToRightAnimation");
const ConstantMoveAnimation_1 = require("./Animations/ConstantMoveAnimation");
class AnimationManager {
    constructor(config) {
        this._animations = [];
        this._renderer = config.renderer;
        this._renderer.ticker.add(delta => {
            this.update(delta);
            this.flushFinishedAnimations();
        });
    }
    _addAnimation(animation) {
        this._animations.push(animation);
    }
    playLinearMoveAnimation(target, duration, endPosition) {
        const config = {
            target: target,
            duration: duration,
            endPosition: endPosition,
            easingFunction: (progress) => progress
        };
        const animation = new MoveAnimation_1.MoveAnimation(config);
        this._addAnimation(animation);
    }
    playLinearMoveInfnitely(target, direction, speed) {
        const config = {
            direction: direction,
            speed: speed,
            target: target,
            duration: 1,
            isInfinite: true,
            maxX: this._renderer.screen.width,
            maxY: this._renderer.screen.height
        };
        const animation = new ConstantMoveAnimation_1.ConstantMoveAnimation(config);
        this._addAnimation(animation);
        return animation;
    }
    playTiltAnimation(target, duration) {
        const config = {
            target: target,
            duration: duration
        };
        const animation = new TiltAnimation_1.TiltAnimation(config);
        this._addAnimation(animation);
    }
    playSlideInAnimation(target, duration, onFinished, scope) {
        const config = {
            target: target,
            duration: duration,
            endPosition: { x: 0, y: 0 }
        };
        const animation = new SlideInAnimiation_1.SlideInAnimation(config);
        if (scope && onFinished) {
            animation.onFinishedAnimationSignal.addListener(onFinished, scope);
        }
        this._addAnimation(animation);
    }
    playPopAnimation(target, duration, targetScale) {
        const config = {
            target: target,
            duration: duration,
            targetScale: targetScale
        };
        const animation = new PopAnimation_1.PopAnimation(config);
        this._addAnimation(animation);
    }
    playSpinAnimation(target, numRotations, direction = false, duration, onFinished, scope) {
        const config = {
            target: target,
            duration: duration,
            numRotations: numRotations,
            direction: direction,
            easingFunction: function (progress) {
                return 2 * Math.pow(Math.sin(progress * 2 * Math.PI), 2);
            }
        };
        const animation = new SpinAnimation_1.SpinAnimation(config);
        if (onFinished && scope) {
            animation.onFinishedAnimationSignal.addListener(onFinished, scope);
        }
        this._addAnimation(animation);
        return animation;
    }
    playSlideInfromLeft(target, duration, onFinished, scope) {
        const config = {
            target: target,
            duration: duration,
            endPosition: { x: 1, y: 1 }
        };
        const animation = new SlideInfromLeftAnimation_1.SlideInFromLeftAninmation(config);
        if (onFinished && scope) {
            animation.onFinishedAnimationSignal.addListener(onFinished, scope);
        }
        this._addAnimation(animation);
    }
    playSlideOutToRight(target, duration, onFinished, scope) {
        const config = {
            target: target,
            duration: duration,
            endPosition: { x: 1, y: 1 },
            screenWidth: this._renderer.screen.width
        };
        const animation = new SlideOutToRightAnimation_1.SlideOutToRightAnimtaion(config);
        if (onFinished && scope) {
            animation.onFinishedAnimationSignal.addListener(onFinished, scope);
        }
        this._addAnimation(animation);
    }
    flushFinishedAnimations() {
        this._animations = this._animations.filter(animation => !animation.isFinished());
    }
    stopAnimation(animation) {
        const index = this._animations.indexOf(animation);
        this._animations[index].stop();
    }
    update(delta) {
        this._animations.forEach(animation => {
            animation.update(delta);
        });
    }
}
exports.AnimationManager = AnimationManager;
