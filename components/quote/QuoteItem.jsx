import React, { useEffect } from 'react';
import { useFormContext, useWatch } from "react-hook-form";
import { FloatingInput } from "@/components/form/FloatingInput";
import { Button, HStack, Separator } from "@chakra-ui/react";
import { CustomTooltip } from "@/components/text/CustomTooltip";
import { Copy, Trash2 } from "lucide-react";

export const QuoteItem = ({ field, index, handleAdd, handleRemove }) => {
    const {
        register,
        control,
        setValue,
        formState: { errors },
    } = useFormContext();

    const [price, quantity] = useWatch({
        control,
        name: [`item.${index}.price`, `item.${index}.quantity`]
    });

    const amount = (Number(price) || 0) * (Number(quantity) || 0);

    useEffect(() => {
        setValue(`items.${index}.amount`, amount);
    }, [amount, index, setValue]);

    return (
        <HStack gap="15px" alignItems="flex-start">
            <FloatingInput label="類別" width="150px" {...register(`items.${index}.category`)} />

            <FloatingInput
                label="項目"
                width="100px"
                errorText="項目名稱不得為空"
                invalid={!!errors.items?.[index]?.itemName}
                {...register(`items.${index}.itemName`, { required: true })}
            />

            <FloatingInput
                label="單價"
                width="100px"
                errorText="單價不得為空"
                invalid={!!errors.items?.[index]?.price}
                {...register(`items.${index}.price`, { required: "單價不得為空" })}
            />

            <FloatingInput
                label="數量"
                width="80px"
                errorText="數量必須大於0"
                invalid={!!errors.items?.[index]?.quantity}
                {...register(`items.${index}.quantity`, { min: 1 })}
            />

            {/* <FloatingInput label="單位" width="100px" /> */}

            <FloatingInput label="金額" width="120px" value={amount} disabled />

            <HStack>
                <CustomTooltip
                    trigger={
                        <Button size="sm" variant="outline" colorPalette="cyan" onClick={() => handleAdd(field.index)}>
                            <Copy />
                        </Button>
                    }
                    content="複製"
                />
                <CustomTooltip
                    trigger={
                        <Button size="sm" variant="outline" colorPalette="red" onClick={() => handleRemove(index)}>
                            <Trash2 />
                        </Button>
                    }
                    content="刪除"
                />
                <Separator />
            </HStack>
        </HStack>
    );
};