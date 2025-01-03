/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { FunctionCall } from "./FunctionCall";

export const ToolCall: core.serialization.ObjectSchema<serializers.ToolCall.Raw, OpikApi.ToolCall> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        index: core.serialization.number().optional(),
        type: core.serialization.stringLiteral("function").optional(),
        function: FunctionCall.optional(),
    });

export declare namespace ToolCall {
    interface Raw {
        id?: string | null;
        index?: number | null;
        type?: "function" | null;
        function?: FunctionCall.Raw | null;
    }
}