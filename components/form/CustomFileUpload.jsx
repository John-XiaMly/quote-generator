import React from 'react';
import { FileUpload, Float, Icon, Text } from "@chakra-ui/react";
import { Upload, X } from "lucide-react";

const FileUploadList = ({ files = [] }) => {
    if (files.length === 0) {
        return null;
    }

    return (
        <FileUpload.ItemGroup
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            gap={4}
        >
            {files.map((file) => (
                <FileUpload.Item
                    key={`${file.name}-${file.lastModified}`}
                    w="auto"
                    boxSize="20"
                    p="2"
                    file={file}
                >
                    <FileUpload.ItemPreviewImage />
                    <Float placement="top-end">
                        <FileUpload.ItemDeleteTrigger boxSize="4" layerStyle="fill.solid">
                            <X />
                        </FileUpload.ItemDeleteTrigger>
                    </Float>
                </FileUpload.Item>
            ))}
        </FileUpload.ItemGroup>
    )
}

export const CustomFileUpload = ({ text, supportType, onChange, value, ...props }) => {
    const handleFileChange = (details) => {
        const fileMap = new Map();
        details.acceptedFiles.forEach(file => {
            fileMap.set(`${file.name}-${file.lastModified}`, file);
        });
        onChange(Array.from(fileMap.values()));
    }

    return (
        <FileUpload.Root alignItems="stretch" {...props} onFileChange={handleFileChange}>
            <FileUpload.HiddenInput />
            <FileUpload.Dropzone>
                <Icon size="md" color="fg.muted">
                    <Upload />
                </Icon>
                <FileUpload.DropzoneContent>
                    <Text color="fg.muted">{text}</Text>
                    <Text color="fg.muted">{supportType}</Text>
                </FileUpload.DropzoneContent>
            </FileUpload.Dropzone>
            <FileUploadList files={value} />
        </FileUpload.Root>
    );
};