import { Checkbox } from "@chakra-ui/react";

export const CustomCheckbox = ({ label, ...props }) => {
    return (
        <Checkbox.Root {...props}>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>{label}</Checkbox.Label>
        </Checkbox.Root>
    )
}