import React from 'react';
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";

export const CustomDialog = ({ open, header, content, handleClose }) => {
    return (
        <Dialog.Root open={open}>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>{header}</Dialog.Header>
                        <Dialog.Body>
                            {content}
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChids>
                                <Button variant='outline' colorPalette='blue' onClick={handleClose}>確認</Button>
                            </Dialog.ActionTrigger>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size='sm' onClick={handleClose} />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};