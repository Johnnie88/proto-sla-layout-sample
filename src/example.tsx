import * as React from "react";
import { fixedColumns, tableItemsNoIcons } from "./TableData";

import { Card } from "azure-devops-ui/Card";
import { Table } from "azure-devops-ui/Table";
import "./Table.Example.css";

export default class TableBasicExample extends React.Component {
    public render(): JSX.Element {
        return (
            <Card className="flex-grow bolt-table-card" contentProps={{ contentPadding: false }}>
                <Table
                    ariaLabel="Basic Table"
                    columns={fixedColumns}
                    itemProvider={tableItemsNoIcons}
                    role="table"
                    className="table-example"
                    containerClassName="h-scroll-auto"
                />
            </Card>
        );
    }
}
