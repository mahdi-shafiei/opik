/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { LlmAsJudgeModelParameters } from "./LlmAsJudgeModelParameters";
import { LlmAsJudgeMessage } from "./LlmAsJudgeMessage";
import { LlmAsJudgeOutputSchema } from "./LlmAsJudgeOutputSchema";

export const LlmAsJudgeCode: core.serialization.ObjectSchema<serializers.LlmAsJudgeCode.Raw, OpikApi.LlmAsJudgeCode> =
    core.serialization.object({
        model: LlmAsJudgeModelParameters,
        messages: core.serialization.list(LlmAsJudgeMessage),
        variables: core.serialization.record(core.serialization.string(), core.serialization.string()),
        schema: core.serialization.list(LlmAsJudgeOutputSchema),
    });

export declare namespace LlmAsJudgeCode {
    export interface Raw {
        model: LlmAsJudgeModelParameters.Raw;
        messages: LlmAsJudgeMessage.Raw[];
        variables: Record<string, string>;
        schema: LlmAsJudgeOutputSchema.Raw[];
    }
}
