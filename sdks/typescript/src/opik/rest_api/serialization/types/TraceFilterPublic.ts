/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { TraceFilterPublicOperator } from "./TraceFilterPublicOperator";

export const TraceFilterPublic: core.serialization.ObjectSchema<
    serializers.TraceFilterPublic.Raw,
    OpikApi.TraceFilterPublic
> = core.serialization.object({
    field: core.serialization.string().optional(),
    operator: TraceFilterPublicOperator.optional(),
    key: core.serialization.string().optional(),
    value: core.serialization.string().optional(),
});

export declare namespace TraceFilterPublic {
    export interface Raw {
        field?: string | null;
        operator?: TraceFilterPublicOperator.Raw | null;
        key?: string | null;
        value?: string | null;
    }
}
