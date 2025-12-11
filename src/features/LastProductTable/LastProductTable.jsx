import React, { Children } from 'react'
import Table from '../../components/common/Table/Table'
import { Link } from 'react-router'
import { MdOpenInNew } from 'react-icons/md';
import TableHead from "./../../components/common/Table/Elements/TableHead"
import TableHeadCell from "./../../components/common/Table/Elements/TableHeadCell"
import {products, productsTableHeadRow} from '../../data/products';
import TableBody from "./../../components/common/Table/Elements/TableBody"
import TableRow from "./../../components/common/Table/Elements/TableRow"
import TableCell from "./../../components/common/Table/Elements/TableCell"
import clsx from 'clsx';


const LastProductTable = () => {
  const Buttons = () => {
    return (
    <Link
      to="/products"
      className='flex-center gap-1 underline hover:text-blue-500'>
      <span>صفحه محصولات</span>
      <MdOpenInNew />
    </Link>
    );
  };
  
  return (
    <div>
      <Table header={{title: "لیست محصولات", Buttons: Buttons}}>
        <TableHead>
          {productsTableHeadRow.map((row) => (
            <TableHeadCell key={row}>{row}</TableHeadCell>
          ))}
        </TableHead>
        <TableBody>
          {products.map((product) => 
          <TableRow key={product.id}>
            <TableCell>{product.id.slice(0, 10)}...</TableCell>
            <TableCell>{product.title}</TableCell>
            <TableCell>
              <p className={clsx(
                  product.isPublished ? "success" : "danger",
                  "badge"
                )}
              >
              {product.isPublished ? "عمومی" : "خصوصی"}
              </p>
            </TableCell>
            <TableCell>
              <span>{product.price.toLocaleString("fa-IR")}
               {""} تومان
              </span>
            </TableCell>
            <TableCell>عملیات</TableCell>
          </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default LastProductTable