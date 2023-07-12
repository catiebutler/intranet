import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import moment from 'moment';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import Dropdown from '@/components/Dropdown';

type Person = {
  name: string
  // lastName: string
  // age: number
  // visits: number
  // status: string
  // progress: number
}

// const defaultData: Person[] = [
//   {
//     firstName: 'tanner',
//     lastName: 'linsley',
//     age: 24,
//     visits: 100,
//     status: 'In Relationship',
//     progress: 50,
//   },
//   {
//     firstName: 'tandy',
//     lastName: 'miller',
//     age: 40,
//     visits: 40,
//     status: 'Single',
//     progress: 80,
//   },
//   {
//     firstName: 'joe',
//     lastName: 'dirte',
//     age: 45,
//     visits: 20,
//     status: 'Complicated',
//     progress: 10,
//   },
// ]

const columnHelper = createColumnHelper<Person>()

// const apikey = process.env.NOTION_API_KEY
// const dbid = process.env.NOTION_DATABASE_ID


const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  // columnHelper.accessor(row => row.lastName, {
  //   id: 'lastName',
  //   cell: info => <i>{info.getValue()}</i>,
  //   header: () => <span>Last Name</span>,
  //   footer: info => info.column.id,
  // }),
  // columnHelper.accessor('age', {
  //   header: () => 'Age',
  //   cell: info => info.renderValue(),
  //   footer: info => info.column.id,
  // }),
  // columnHelper.accessor('visits', {
  //   header: () => <span>Visits</span>,
  //   footer: info => info.column.id,
  // }),
  // columnHelper.accessor('status', {
  //   header: 'Status',
  //   footer: info => info.column.id,
  // }),
  // columnHelper.accessor('progress', {
  //   header: 'Profile Progress',
  //   footer: info => info.column.id,
  // }),
]

function Table() {
console.log(process.env.NOTION_DATABASE_ID)

  const [data, setData] = useState<Person[]>([]);
  // const [data, setData] = React.useState(() => [...defaultData])

  useEffect(() => {
    // Fetch data from Notion API here
    axios.get(`https://api.notion.com/v1/databases/ed7859e28e75471ba0968f6b1643a696`, {
      headers: {
        Authorization: `Bearer secret_yPE3BnhpwnkRej3t588muasYKcCnH8EhdIPwpeZUnKN`,
        'Notion-Version': '2021-05-13',
      },
    })
      .then(response => {
        console.log('resonse', response)
        const notionData = response.data.results;

        // Transform and set fetched notionData into Person type
        const newData = notionData.map((entry: any) => ({
          name: entry.properties.name.title[0].text.content,
          // lastName: entry.properties.LastName.title[0].text.content,
          // age: parseInt(entry.properties.Age.number),
          // visits: parseInt(entry.properties.Visits.number),
          // status: entry.properties.Status.select.name,
          // progress: parseInt(entry.properties.Progress.number),
        }));

        setData(newData);
      })
      .catch(error => console.log(error));
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <Dropdown />
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  )
}

export default Table
