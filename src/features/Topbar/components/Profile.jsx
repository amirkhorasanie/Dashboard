import { AVATAR_URL } from "../../../data/constants";

const Profile = () => {
  return (
    <div
      tabIndex="1"
      className="focus-within:ring-2 flex focus-within:ring-black/20 cursor-pointer items-center gap-2 ml-9 lg:ml-0 select-none hover:bg-black/5 rounded-md duration-150"
    >
      <div className="size-11">
        <img
          className="size-full rounded-full object-cover"
          src={AVATAR_URL}
          alt="User Avatar"
        />
      </div>
      <div>
        <p className="text-sm font-semibold">امیر خراسانی</p>
        <p className="text-xs text-gray-500">برنامه نویس فرانت</p>
      </div>
    </div>
  );
};

export default Profile;
