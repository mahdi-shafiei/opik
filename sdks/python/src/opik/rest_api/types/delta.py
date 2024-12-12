# This file was auto-generated by Fern from our API Definition.

from ..core.pydantic_utilities import UniversalBaseModel
import typing
from .delta_role import DeltaRole
from .tool_call import ToolCall
from .function_call import FunctionCall
from ..core.pydantic_utilities import IS_PYDANTIC_V2
import pydantic


class Delta(UniversalBaseModel):
    role: typing.Optional[DeltaRole] = None
    content: typing.Optional[str] = None
    tool_calls: typing.Optional[typing.List[ToolCall]] = None
    function_call: typing.Optional[FunctionCall] = None

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(
            extra="allow", frozen=True
        )  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow