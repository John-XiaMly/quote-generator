import { Box, Field, Input } from "@chakra-ui/react";

export const FloatingInput = ({ label, width, invalid, errorText, ...props }) => {
    return (
        <Field.Root invalid={invalid} width={width}>
            <Box position="relative" width="full">
                {/* 必須留一個空格，:placeholder-shown 才會生效 */}
                <Input
                    className="peer"
                    placeholder=" "
                    {...props}
                    _focus={{
                        borderColor: invalid ? "red.500" : "blue.500",
                        borderWidth: "2px",
                    }}
                />
                <Box
                    as="label"
                    position="absolute"
                    left="2.5"
                    top="2"
                    px="1"
                    bg="white"
                    fontSize="md"
                    color="gray.500"
                    transition="all 0.2s ease-in-out"
                    pointerEvents="none"
                    // --- 核心邏輯：Peer 狀態控制 ---
                    _peerFocus={{
                        top: "-2.5",
                        fontSize: "xs",
                        color: invalid ? "red.500" : "blue.500",
                    }}
                    // 當 Input 有值時 (placeholder 不顯示時)，標籤固定在上方
                    css={{
                        ".peer:not(:placeholder-shown) ~ &": {
                            top: "-2.5",
                            fontSize: "xs",
                            color: invalid ? "red.500" : "gray.600",
                        },
                    }}
                >
                    {label}
                </Box>
            </Box>

            { invalid && (
                <Field.ErrorText color="red.500" fontSize="xs" mt="1">
                    { errorText }
                </Field.ErrorText>
            ) }
        </Field.Root>
    );
}