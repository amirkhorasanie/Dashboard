import React, { useState } from "react";
import Table from "../../components/common/Table/Table";
import users from "../../data/users";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableRow from "../../components/common/Table/elements/TableRow";
import TableCell from "../../components/common/Table/elements/TableCell";
import clsx from "clsx";
import RemoveProductIcon from "../ProducstTable/components/RemoveProductIcon";

const UsersView = () => {
  
  const [allUsers, setAllUsers] = useState([...users])
  
  const removeProduct = (id) => {
    const newUsers = allUsers.filter((user) => user.id !== id);
    setAllUsers(newUsers);
  };


  return (
    <Table header={{ title: "لیست کاربران" }}
            pagination={{
              items: users,
              setItems: setAllUsers,
              itemsPerPage: 7,
            }}
    >
      <TableHead>
        <TableHeadCell>#شناسه</TableHeadCell>
        <TableHeadCell>نام و نام خانوادگی</TableHeadCell>
        <TableHeadCell>نام کاربری</TableHeadCell>
        <TableHeadCell>آدرس ایمیل</TableHeadCell>
        <TableHeadCell>شماره موبایل</TableHeadCell>
        <TableHeadCell>ارشدیت</TableHeadCell>
        <TableHeadCell />
      </TableHead>

      <TableBody>
        {allUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id.slice(0, 10)}...</TableCell>
            <TableCell>{user.fullName}</TableCell>
            <TableCell>{user.userName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <p className={clsx(
                  
                )}
              >
                {user.phoneNumber}
              </p>
            </TableCell>
            <TableCell>
              <p
                className={clsx(
                  user.roles === "مدیر"
                    ? "manager"
                    : user.roles === "پشتیبانی"
                    ? "admin"
                    : "user",
                  "badge"
                )}
              >
                {user.roles === "مدیر"
                  ? "مدیر"
                  : user.roles === "پشتیبانی"
                  ? "پشتیبانی"
                  : "کاربر"}
              </p>
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                <RemoveProductIcon 
                user={user}
                handler={removeProduct}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersView;
