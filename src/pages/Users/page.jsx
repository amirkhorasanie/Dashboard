import { useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import UsersView from "../../features/UsersView/UsersView";
import Modal from "../../components/common/Modal";
import users from "../../data/users";
import AddUserFields from "../../features/UsersView/components/AddUserFields";
import NumberUsers from "../../features/UsersView/components/NumberUsers";
import { IoMdAdd } from "react-icons/io";

// قبل از استفاده، نقش‌های قدیمی را به انگلیسی تبدیل می‌کنیم
const normalizedUsers = users.map(u => ({
  ...u,
  roles: u.roles === "مدیر" ? "manager" :
         u.roles === "پشتیبانی" ? "admin" :
         "user"
}));

const Users = ({itemsLenght}) => {
  const [allUsers, setAllUsers] = useState([...normalizedUsers]);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [newUser, setNewUser] = useState({
    id: crypto.randomUUID(),
    userName: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    roles: "",
  });

  const createNewUser = () => {
    setAllUsers([...allUsers, newUser]);
    setNewUser({
      id: crypto.randomUUID(),
      userName: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      roles: "",
    });
  }

  const Buttons = (
    <Modal
      title="ایجاد کاربر جدید"
      Trigger={
        <button className="dark:bg-cyan-900 gap-1 flex transition-all hover:rounded-sm dark:text-cyan-400 text-cyan-900 bg-cyan-400 font-semibold px-4 py-2 rounded-2xl">
      <IoMdAdd className="text-2xl"/>   ایجاد کاربر جدید
        </button>
      }
      onSubmit={createNewUser}
    >
      <AddUserFields newUser={newUser} onChange={setNewUser} />
    </Modal>
  );

  return (
    <>
      <SectionTitle title="کاربران وبسایت" Buttons={Buttons} />
      <NumberUsers itemsLenght={allUsers.length}/>
      <section className="mt-10 w-full! min-w-full!">
        <UsersView 
          users={allUsers} 
          paginatedProducts={paginatedProducts}
          setUsers={setPaginatedProducts}
          />
      </section>
    </>
  );
};

export default Users;
