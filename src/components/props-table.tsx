// components/ui/PropsTable.tsx
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface PropsTableProps {
  props: {
    prop: string;
    type: string;
    description: string;
  }[];
}

const PropsTable: React.FC<PropsTableProps> = ({ props }) => (
  <div className="bg-gray-900 rounded-lg overflow-hidden">
    <Table className="w-full text-left text-gray-300">
      <TableHeader className="bg-gray-800">
        <TableRow>
          <TableHead className="py-2 px-4 border-b border-gray-700">
            Prop
          </TableHead>
          <TableHead className="py-2 px-4 border-b border-gray-700">
            Type
          </TableHead>
          <TableHead className="py-2 px-4 border-b border-gray-700">
            Description
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.map(({ prop, type, description }) => (
          <TableRow key={prop}>
            <TableCell className="py-2 px-4 border-b border-gray-700">
              {prop}
            </TableCell>
            <TableCell className="py-2 px-4 border-b border-gray-700">
              {type}
            </TableCell>
            <TableCell className="py-2 px-4 border-b border-gray-700">
              {description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default PropsTable;
