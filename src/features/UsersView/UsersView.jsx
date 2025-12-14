import React from "react";
import Table from "../../components/common/Table/Table";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableRow from "../../components/common/Table/elements/TableRow";
import TableCell from "../../components/common/Table/elements/TableCell";
import clsx from "clsx";
import RemoveProductIcon from "../ProductsTable/components/RemoveProductIcon";

const UsersView = ({ users, setUsers, paginatedProducts}) => {

  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  // دیکشنری برای نمایش متن فارسی نقش
  const roleLabels = {
    user: "کاربر",
    manager: "مدیر",
    admin: "پشتیبانی"
  };

  return (
    <Table header={{ title:"مدیریت کاربران" }}
    
    pagination={{
        itemsPerPage: 6,
        items: users,
        setItems: setUsers,
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
        {paginatedProducts.map((user) => {
          // تبدیل نقش‌های قدیمی فارسی به انگلیسی برای نمایش درست
          let role = user.roles;
          if (role === "مدیر") role = "manager";
          if (role === "پشتیبانی") role = "admin";

          return (
            <TableRow key={user.id}>
              <TableCell>{user.id.slice(0, 10)}...</TableCell>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell>
                <p className={clsx(role, "badge")}>
                  {roleLabels[role] || "کاربر"}
                </p>
              </TableCell>
              <TableCell>
                <RemoveProductIcon user={user} handler={removeUser} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default UsersView;
