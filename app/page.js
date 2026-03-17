"use client";

import React, {useState} from 'react';
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    VStack,
    Text,
    Input,
    SimpleGrid,
    Icon,
    Separator,
    Alert,
    Collapsible,
    FileUpload,
    InputGroup,
    Tabs,
    Stack,
    NativeSelect,
    Link,
    Textarea
} from '@chakra-ui/react';
import {
    Building2,
    ChevronDown,
    ChevronUp,
    Copy, DollarSign,
    Eye,
    FileText,
    Mail,
    MapPin,
    PanelRightClose,
    Phone,
    Plus,
    ScrollText,
    Trash2,
    User
} from "lucide-react";
import { LuGithub, LuShoppingCart, LuUpload } from "react-icons/lu";
import { CustomDatePicker } from "@/components/form/CustomDatePicker";
import { FloatingInput } from "@/components/form/FloatingInput";
import { CustomNumberInput } from "@/components/form/CustomNumberInput";
import { CustomTable } from "@/components/data/CustomTable";
import { CustomCheckbox } from "@/components/form/CustomCheckbox";
import { CustomTooltip } from "@/components/text/CustomTooltip";

export default function QuoteGeneratorChakra() {
    const [open, setOpen] = useState(false);
    // 色彩配置
    const formBg = {base: 'gray.200'};
    const inputBg = {base: 'white'};
    const borderColor = {base: 'gray.200', _dark: 'gray.700'};

    const columns = [
        { key: "category", name: "類別" },
        { key: "item", name: "項目" },
        { key: "price", name: "單價" },
        { key: "quantity", name: "數量" },
        { key: "amount", name: "金額" }
    ];

    const data = [
        { category: "-", item: "網站設計與開發", price: 36000, quantity: 1, amount: 36000 },
        { category: "-", item: "版面客製與 PDF 匯出", price: 12000, quantity: 1, amount: 12000 }
    ]

    return (
        <Box minH="100vh" bg="gray.50" py={8} color="gray.800">
            <Container maxW="1400px">
                {/* Header */}
                <Flex justify="space-between" align="start" mb={6}>
                    <Heading size="2xl" letterSpacing="tight">
                        報價單產生器
                    </Heading>
                    <HStack spacing={3}>
                        <Button size="sm" variant="outline" colorPalette="cyan" borderRadius="xl">
                            <Icon size="lg">
                                <LuGithub/>
                            </Icon>
                            <Text>Star</Text>
                        </Button>
                        <Button size="sm" variant="outline" colorPalette="cyan" borderRadius="xl">
                            登入
                        </Button>
                    </HStack>
                </Flex>

                {/* Tab Switcher */}
                <HStack mb={4} p={1} bg="white" border="1px" borderColor="gray.200" borderRadius="xl" shadow="sm"
                        w="fit-content">
                    <Tabs.Root defaultValue="quote">
                        <Tabs.List>
                            <Tabs.Trigger value="quote">
                                報價單
                            </Tabs.Trigger>
                            <Tabs.Trigger value="logs">
                                更新紀錄
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="quote" p={2}>
                            <SimpleGrid columns={{base: 1, lg: 2}} spacing={6} templateColumns={{lg: '1.2fr 1fr'}}
                                        gap={6}>
                                <VStack spacing={6} align="stretch" flex={1}>
                                    {/* 基本資料 Section */}
                                    <Box borderRadius="2xl" border="1px" borderColor={borderColor} shadow="sm"
                                         overflow="hidden">
                                        <Flex justify="space-between" align="center" px={6} py={5} borderBottom="1px"
                                              borderColor="gray.100">
                                            <HStack spacing={3}>
                                                <Flex w={11} h={11} align="center" justify="center" bg="gray.100"
                                                      borderRadius="full">
                                                    <FileText/>
                                                </Flex>
                                                <Heading size="xl">基本資料</Heading>
                                            </HStack>
                                            <Button variant="link" size="sm" color="gray.500">
                                                <PanelRightClose/>
                                                隱藏預覽
                                            </Button>
                                        </Flex>

                                        <VStack spacing={6} p={6} align="stretch">
                                            {/* 客戶資料 */}
                                            <Box bg={formBg} p={5} borderRadius="2xl">
                                                <HStack mb={5} fontSize="lg" fontWeight="semibold">
                                                    <User/>
                                                    <Text>客戶資料</Text>
                                                </HStack>
                                                <SimpleGrid columns={{base: 1, md: 2}} spacing={4}>
                                                    <Box p={1}>
                                                        <Text mb={2} fontSize="sm" fontWeight="medium">
                                                            客戶名稱
                                                            <Text as="span" color="red.500">*</Text>
                                                        </Text>
                                                        <InputGroup startElement={<Building2 size={16}/>}>
                                                            <Input bg={inputBg} placeholder="請輸入客戶名稱"
                                                                   borderRadius="xl"/>
                                                        </InputGroup>
                                                    </Box>
                                                    <Box p={1}>
                                                        <Text mb={2} fontSize="sm" fontWeight="medium">統一編號</Text>
                                                        <InputGroup startElement={<FileText size={16}/>}>
                                                            <Input bg={inputBg} placeholder="請輸入統一編號"
                                                                   borderRadius="xl"/>
                                                        </InputGroup>
                                                    </Box>
                                                </SimpleGrid>
                                                <Collapsible.Root>
                                                    <Collapsible.Trigger padding="2">
                                                        <HStack mb={5} fontSize="lg" fontWeight="semibold"
                                                                onClick={() => setOpen(!open)}>
                                                            {open ? <ChevronUp/> : <ChevronDown/>}
                                                            <Text>LOGO、聯絡人、電話、地址</Text>
                                                        </HStack>
                                                    </Collapsible.Trigger>
                                                    <Collapsible.Content>
                                                        <SimpleGrid spacing={4}>
                                                            <Box>
                                                                <Text mb={2} fontSize="sm" fontWeight="medium">
                                                                    客戶 Logo
                                                                    <Text as="span" color="red.500">*</Text>
                                                                </Text>
                                                                <FileUpload.Root maxW="4xl" alignItems="stretch"
                                                                                 maxFiles={10}>
                                                                    <FileUpload.HiddenInput/>
                                                                    <FileUpload.Dropzone>
                                                                        <Icon size="md" color="fg.muted">
                                                                            <LuUpload/>
                                                                        </Icon>
                                                                        <FileUpload.DropzoneContent>
                                                                            <Text color="fg.muted">上傳客戶 Logo</Text>
                                                                            <Text color="fg.muted">支援
                                                                                PNG、JPG、GIF</Text>
                                                                        </FileUpload.DropzoneContent>
                                                                    </FileUpload.Dropzone>
                                                                    <FileUpload.List/>
                                                                </FileUpload.Root>
                                                            </Box>
                                                        </SimpleGrid>
                                                        <SimpleGrid columns={{base: 1, md: 2}} spacing={4}>
                                                            <Box p={1}>
                                                                <Text mb={2} fontSize="sm" fontWeight="medium">
                                                                    聯絡人
                                                                </Text>
                                                                <InputGroup startElement={<User size={16}/>}>
                                                                    <Input bg={inputBg} placeholder="請輸入聯絡人"
                                                                           borderRadius="xl"/>
                                                                </InputGroup>
                                                            </Box>
                                                            <Box p={1}>
                                                                <Text mb={2} fontSize="sm"
                                                                      fontWeight="medium">連絡電話</Text>
                                                                <InputGroup startElement={<Phone size={16}/>}>
                                                                    <Input bg={inputBg} placeholder="請輸入連絡電話"
                                                                           borderRadius="xl"/>
                                                                </InputGroup>
                                                            </Box>
                                                        </SimpleGrid>
                                                        <SimpleGrid columns={{base: 1, md: 2}} spacing={4}>
                                                            <Box p={1}>
                                                                <Text mb={2} fontSize="sm" fontWeight="medium">
                                                                    Email
                                                                </Text>
                                                                <InputGroup startElement={<Mail size={16}/>}>
                                                                    <Input bg={inputBg} placeholder="請輸入Email"
                                                                           borderRadius="xl"/>
                                                                </InputGroup>
                                                            </Box>
                                                            <Box p={1}>
                                                                <Text mb={2} fontSize="sm"
                                                                      fontWeight="medium">地址</Text>
                                                                <InputGroup startElement={<MapPin size={16}/>}>
                                                                    <Input bg={inputBg} placeholder="請輸入地址"
                                                                           borderRadius="xl"/>
                                                                </InputGroup>
                                                            </Box>
                                                        </SimpleGrid>
                                                    </Collapsible.Content>
                                                </Collapsible.Root>
                                            </Box>

                                            {/* 報價人員資料 */}
                                            <Box bg={formBg} p={5} borderRadius="2xl">
                                                <HStack mb={5} fontSize="lg" fontWeight="semibold">
                                                    <ScrollText/>
                                                    <Text>報價人員資料</Text>
                                                </HStack>
                                                <SimpleGrid columns={{base: 1, md: 2}} spacing={4}>
                                                    <Box p={1}>
                                                        <Text mb={2} fontSize="sm" fontWeight="medium">
                                                            報價公司/人員
                                                            <Text as="span" color="red.500">*</Text>
                                                        </Text>
                                                        <InputGroup startElement={<User size={16}/>}>
                                                            <Input bg={inputBg} placeholder="請輸入報價人員"
                                                                   borderRadius="xl"/>
                                                        </InputGroup>
                                                    </Box>
                                                    <Box p={1}>
                                                        <Text mb={2} fontSize="sm" fontWeight="medium">統一編號</Text>
                                                        <InputGroup startElement={<FileText size={16}/>}>
                                                            <Input bg={inputBg} placeholder="請輸入統一編號"
                                                                   borderRadius="xl"/>
                                                        </InputGroup>
                                                    </Box>
                                                    <Box p={1}>
                                                        <Text mb={2} fontSize="sm" fontWeight="medium">
                                                            Email
                                                            <Text as="span" color="red.500">*</Text>
                                                        </Text>
                                                        <InputGroup startElement={<Mail size={16}/>}>
                                                            <Input bg={inputBg} placeholder="請輸入Email"
                                                                   borderRadius="xl"/>
                                                        </InputGroup>
                                                    </Box>
                                                    <Box p={1}>
                                                        <Text mb={2} fontSize="sm" fontWeight="medium">聯絡電話</Text>
                                                        <HStack>
                                                            <InputGroup startElement={<Phone size={16}/>}>
                                                                <Input bg={inputBg} placeholder="請輸入聯絡電話"
                                                                       borderRadius="xl"/>
                                                            </InputGroup>
                                                            <Input bg={inputBg} placeholder="分機" w="24"
                                                                   borderRadius="xl"/>
                                                        </HStack>

                                                    </Box>
                                                    <Box p={1}>
                                                        <CustomDatePicker label={"報價日期"} bg={inputBg}
                                                                          borderRadius="xl"/>
                                                    </Box>
                                                    <Box p={1}>
                                                        <CustomDatePicker label={"有效日期"} bg={inputBg}
                                                                          borderRadius="xl"/>
                                                    </Box>
                                                </SimpleGrid>
                                            </Box>
                                        </VStack>
                                    </Box>

                                    {/* 服務項目 Section */}
                                    <Box mt={2} borderRadius="2xl" border="1px" borderColor={borderColor} shadow="sm">
                                        <Flex justify="space-between" align="center" px={6} py={5} borderBottom="1px"
                                              borderColor="gray.100">
                                            <HStack spacing={3}>
                                                <Flex w={11} h={11} align="center" justify="center" bg="gray.100"
                                                      borderRadius="full">
                                                    <LuShoppingCart/>
                                                </Flex>
                                                <Heading size="xl">服務項目</Heading>
                                            </HStack>
                                            <Button variant="outline" colorPalette="cyan" borderRadius="xl">
                                                <Plus/>
                                                新增項目
                                            </Button>
                                        </Flex>

                                        <Box p={6} overflowX="auto">
                                            <HStack gap={4} alignItems="flex-start">
                                                <FloatingInput label="類別" width="150px" />
                                                <FloatingInput
                                                    label="項目"
                                                    width="100px"
                                                    errorText="項目名稱不得為空"
                                                    invalid
                                                />
                                                <FloatingInput label="單價" width="100px" errorText="單價不得為空" invalid />
                                                <FloatingInput label="數量" width="80px" defaultValue={1} />
                                                {/*<FloatingInput label="單位" width="100px" />*/}
                                                <FloatingInput label="金額" width="120px" value={0} disabled />

                                                <HStack >
                                                    <CustomTooltip
                                                        trigger={
                                                            <Button size="sm" variant="outline" colorPalette="cyan">
                                                                <Copy />
                                                            </Button>
                                                        }
                                                        content="複製" />
                                                    <CustomTooltip
                                                        trigger={
                                                            <Button size="sm" variant="outline" colorPalette="red">
                                                                <Trash2 />
                                                            </Button>
                                                        }
                                                        content="刪除" />
                                                    <Separator />
                                                </HStack>
                                            </HStack>

                                            <HStack alignItems="flex-start" justifyContent="space-between">
                                                <Stack gap="4" width="50%">
                                                    {/* 折扣設定 */}
                                                    <Box>
                                                        <Text fontSize="sm" fontWeight="bold" mb="2">折扣設定</Text>
                                                        <HStack>
                                                            <NativeSelect.Root width="150px">
                                                                <NativeSelect.Field>
                                                                    <option value="fixed">固定金額</option>
                                                                    <option value="percent">百分比</option>
                                                                </NativeSelect.Field>
                                                            </NativeSelect.Root>
                                                            <CustomNumberInput defaultValue={0} min={0} startElement={<DollarSign size={16} />} />
                                                        </HStack>
                                                    </Box>

                                                    {/* 稅別 */}
                                                    <Box>
                                                        <Text fontSize="sm" fontWeight="bold" mb="2">稅別</Text>
                                                        <NativeSelect.Root>
                                                            <NativeSelect.Field placeholder="請選擇稅別">
                                                                <option value="taxed">應稅</option>
                                                                <option value="zero">零稅率</option>
                                                                <option value="exempt">免稅</option>
                                                            </NativeSelect.Field>
                                                        </NativeSelect.Root>
                                                    </Box>
                                                </Stack>

                                                {/* 右側金額統計 */}
                                                <Stack width="200px" gap="4" textAlign="right">
                                                    <HStack justifyContent="space-between">
                                                        <Text color="gray.500">小計</Text>
                                                        <Text fontWeight="bold" fontSize="lg">$0</Text>
                                                    </HStack>
                                                    <Separator/>
                                                    <HStack justifyContent="space-between">
                                                        <Text fontWeight="bold" fontSize="lg">總計</Text>
                                                        <Text fontWeight="bold" fontSize="2xl"
                                                              color="red.500">$0</Text>
                                                    </HStack>
                                                </Stack>
                                            </HStack>
                                        </Box>
                                    </Box>

                                    {/* 其他資訊 Section */}
                                    <Box mt={2} borderRadius="2xl" border="1px" borderColor={borderColor} shadow="sm">
                                        <Flex justify="space-between" align="center" px={6} py={5} borderBottom="1px"
                                              borderColor="gray.100">
                                            <HStack spacing={3}>
                                                <Flex w={11} h={11} align="center" justify="center" bg="gray.100"
                                                      borderRadius="full">
                                                    <LuShoppingCart/>
                                                </Flex>
                                                <Heading size="xl">其他資訊</Heading>
                                            </HStack>
                                        </Flex>
                                        <VStack spacing={6} p={6} align="stretch">
                                            {/* 客戶資料 */}
                                            <Box p={5} borderRadius="2xl">
                                                <SimpleGrid columns={{base: 1, md: 1}} spacing={4}>
                                                    <Box p={1}>
                                                        <Text mb={2} fontSize="sm" fontWeight="medium">
                                                            付款條件
                                                        </Text>
                                                        <Textarea bg={inputBg}
                                                                  placeholder="例: 簽約 30% 完工 60% 驗收 10%"
                                                                  borderRadius="xl" />
                                                    </Box>
                                                    <Box p={1}>
                                                        <Text mb={2} fontSize="sm" fontWeight="medium">備註</Text>
                                                        <Textarea bg={inputBg}
                                                                  placeholder="請輸入備註"
                                                                  borderRadius="xl" />
                                                    </Box>
                                                    <Box p={1}>
                                                        <CustomCheckbox label="是否顯示簽章欄位"
                                                                        variant="outline"
                                                                        colorPalette="cyan"
                                                                        defaultChecked={true} />
                                                    </Box>
                                                </SimpleGrid>
                                            </Box>
                                        </VStack>
                                    </Box>
                                </VStack>

                                {/* 右側預覽 Aside */}
                                <Box as="aside" position="sticky" top={6} h="fit-content" flex={1} borderRadius="2xl"
                                     border="1px" borderColor={borderColor} shadow="sm">
                                    <Box px={6} py={5} borderBottom="1px" borderColor="gray.100">
                                        <HStack spacing={2}>
                                            <Flex w={11} h={11} align="center" justify="center" bg="gray.100"
                                                  borderRadius="full">
                                                <Eye/>
                                            </Flex>
                                            <Heading size="xl">
                                                即時預覽
                                            </Heading>
                                            <Separator/>
                                        </HStack>
                                    </Box>

                                    <VStack spacing={5} p={6} align="stretch">
                                        <Alert.Root status="warning" title="請先完成必填欄位後才能匯出報價單">
                                            <Alert.Indicator/>
                                            <Alert.Title>請先完成必填欄位後才能匯出報價單。</Alert.Title>
                                        </Alert.Root>

                                        <HStack spacing={2}>
                                            <Button size="sm" variant="outline" borderRadius="2xl" disabled>
                                                PDF
                                            </Button>
                                            <Button size="sm" variant="outline" borderRadius="2xl" disabled>
                                                圖片
                                            </Button>
                                            <Button size="sm" variant="outline" borderRadius="2xl" disabled>
                                                Excel
                                            </Button>
                                        </HStack>

                                        <Box>
                                            <Text mb={3} fontSize="sm" fontWeight="medium" color="gray.500">選擇報價單樣式</Text>
                                            <HStack spacing={2}>
                                                <Button size="sm" variant="outline" colorPalette="cyan" borderRadius="2xl">精美版</Button>
                                                <Button size="sm" variant="outline" colorPalette="cyan" borderRadius="2xl">詳細版</Button>
                                                <Button size="sm" variant="outline" colorPalette="cyan" borderRadius="2xl">並列版</Button>
                                            </HStack>
                                        </Box>

                                        {/* 預覽卡片 */}
                                        <Box p={6} border="1px" borderColor="gray.200" borderRadius="2xl"
                                             shadow="inner">
                                            <Heading size="lg" mb={5}>[客戶名稱] - 報價單</Heading>
                                            <Separator/>

                                            <SimpleGrid columns={2} spacingY={2} fontSize="sm" mb={6}>
                                                <Text fontWeight="bold">報價人員：</Text>
                                                <Text>-</Text>
                                                <Text fontWeight="bold">報價日期：</Text>
                                                <Text>2026-03-17</Text>
                                            </SimpleGrid>

                                            <Box borderRadius="xl" border="1px" borderColor="gray.200"
                                                 overflow="hidden">
                                                <CustomTable columns={columns} data={data} />
                                            </Box>

                                            <Text mt={4} textAlign="right" fontSize="lg" fontWeight="bold">
                                                未稅：<Text as="span" color="red.600">NT$ 48,000 元</Text>
                                            </Text>

                                            <VStack align="stretch" mt={10} spacing={10}>
                                                <Text fontSize="sm">客戶簽章</Text>
                                                <Separator/>
                                                <Text textAlign="center" fontSize="xs" color="gray.400">
                                                    使用
                                                    <Link href="https://quote-generator-kappa-blond.vercel.app" colorPalette="blue">
                                                        報價單產生器
                                                    </Link>
                                                    製作｜https://quote-generator-kappa-blond.vercel.app
                                                </Text>
                                            </VStack>
                                        </Box>
                                    </VStack>
                                </Box>
                            </SimpleGrid>
                        </Tabs.Content>
                    </Tabs.Root>
                </HStack>
            </Container>
        </Box>
    );
}