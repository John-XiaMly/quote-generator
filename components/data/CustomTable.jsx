import { Table } from "@chakra-ui/react";

export const CustomTable = ({ columns, data }) => {
    return (
        <Table.Root size="sm" striped>
            <Table.Header>
                <Table.Row>
                    { columns.map(item => (
                        <Table.ColumnHeader key={item.key}>{item.name}</Table.ColumnHeader>
                    )) }
                </Table.Row>
            </Table.Header>
            <Table.Body>
                { data.map((row, rowIndex) => (
                    <Table.Row key={rowIndex}>
                        { columns.map((col, index) => (
                            <Table.Cell key={index}>{data[rowIndex][col.key]}</Table.Cell>
                        )) }
                    </Table.Row>
                )) }
            </Table.Body>
        </Table.Root>
    )
}