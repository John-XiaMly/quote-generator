import { InputGroup, NumberInput } from "@chakra-ui/react";

export const CustomNumberInput = ({ startElement, ...props}) => {
    return (
        <NumberInput.Root {...props}>
            <NumberInput.Control />
            <InputGroup startElement={startElement}>
                <NumberInput.Input />
            </InputGroup>
        </NumberInput.Root>
    )
}