import React from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table";

const AppTable = ({ columns = [], children }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHead key={column}>{column}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
};

export default AppTable;
