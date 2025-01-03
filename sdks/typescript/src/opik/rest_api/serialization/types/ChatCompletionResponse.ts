/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { ChatCompletionChoice } from "./ChatCompletionChoice";
import { Usage } from "./Usage";

export const ChatCompletionResponse: core.serialization.ObjectSchema<
    serializers.ChatCompletionResponse.Raw,
    OpikApi.ChatCompletionResponse
> = core.serialization.object({
    id: core.serialization.string().optional(),
    created: core.serialization.number().optional(),
    model: core.serialization.string().optional(),
    choices: core.serialization.list(ChatCompletionChoice).optional(),
    usage: Usage.optional(),
    systemFingerprint: core.serialization.property("system_fingerprint", core.serialization.string().optional()),
});

export declare namespace ChatCompletionResponse {
    interface Raw {
        id?: string | null;
        created?: number | null;
        model?: string | null;
        choices?: ChatCompletionChoice.Raw[] | null;
        usage?: Usage.Raw | null;
        system_fingerprint?: string | null;
    }
}