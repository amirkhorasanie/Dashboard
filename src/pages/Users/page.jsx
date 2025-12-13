import SectionTitle from "../../components/common/SectionTitle";
import UsersView from "../../features/UsersView/UsersView";

const Users = () => {
  const Buttons = (
    <>
      <button className="dark:bg-cyan-900 transition-all hover:rounded-sm dark:text-cyan-400  text-cyan-900 bg-cyan-400 font-semibold px-4 py-2 rounded-2xl">ایجاد کاربر جدید</button>
    </>
  );
  
  return (
    <>
      <SectionTitle title="کاربران وبسایت" Buttons={Buttons} />
      
      <section className="mt-10 w-full! min-w-full!">
        <UsersView />
      </section>
    </>
  );
};

export default Users;
