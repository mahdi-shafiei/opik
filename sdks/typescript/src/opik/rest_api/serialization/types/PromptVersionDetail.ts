/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { JsonNodeDetail } from "./JsonNodeDetail";
import { PromptVersionDetailType } from "./PromptVersionDetailType";

export const PromptVersionDetail: core.serialization.ObjectSchema<
    serializers.PromptVersionDetail.Raw,
    OpikApi.PromptVersionDetail
> = core.serialization.object({
    id: core.serialization.string().optional(),
    promptId: core.serialization.property("prompt_id", core.serialization.string().optional()),
    commit: core.serialization.string().optional(),
    template: core.serialization.string(),
    metadata: JsonNodeDetail.optional(),
    type: PromptVersionDetailType.optional(),
    changeDescription: core.serialization.property("change_description", core.serialization.string().optional()),
    variables: core.serialization.list(core.serialization.string()).optional(),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    createdBy: core.serialization.property("created_by", core.serialization.string().optional()),
});

export declare namespace PromptVersionDetail {
    export interface Raw {
        id?: string | null;
        prompt_id?: string | null;
        commit?: string | null;
        template: string;
        metadata?: JsonNodeDetail.Raw | null;
        type?: PromptVersionDetailType.Raw | null;
        change_description?: string | null;
        variables?: string[] | null;
        created_at?: string | null;
        created_by?: string | null;
    }
}
