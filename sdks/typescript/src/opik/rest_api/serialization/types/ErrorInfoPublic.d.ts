/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
export declare const ErrorInfoPublic: core.serialization.ObjectSchema<serializers.ErrorInfoPublic.Raw, OpikApi.ErrorInfoPublic>;
export declare namespace ErrorInfoPublic {
    interface Raw {
        exception_type: string;
        message?: string | null;
        traceback: string;
    }
}
