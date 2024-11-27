/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
export declare const CategoricalFeedbackDetailPublic: core.serialization.ObjectSchema<serializers.CategoricalFeedbackDetailPublic.Raw, OpikApi.CategoricalFeedbackDetailPublic>;
export declare namespace CategoricalFeedbackDetailPublic {
    interface Raw {
        categories: Record<string, number>;
    }
}