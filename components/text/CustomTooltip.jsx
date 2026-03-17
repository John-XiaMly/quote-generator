import { Tooltip } from "@chakra-ui/react";

export const CustomTooltip = ({ trigger, content }) => {
    return (
        <Tooltip.Root positioning={{ placement: "bottom" }}>
            <Tooltip.Trigger asChild>
                { trigger }
            </Tooltip.Trigger>
            <Tooltip.Positioner>
                <Tooltip.Content>
                    <Tooltip.Arrow />
                    { content }
                </Tooltip.Content>
            </Tooltip.Positioner>
        </Tooltip.Root>
    )
}