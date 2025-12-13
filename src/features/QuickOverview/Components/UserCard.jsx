const UserCard = ({ fullName, email, profile }) => {
  return (
    <article className="flex mb-2.5 h-17 rounded-3xl hover:scale-103 duration-300 border-2 dark:border-neutral-700 border-neutral-200 px-4 items-center gap-5">
      <div className="size-12 rounded-full overflow-hidden">
        <img src={profile} alt="Avatar" className="size-full object-cover" />
      </div>
      <div className="text-xs space-y-1">
        <p>
          کاربر
          <span className="inline-block text-cyan-500 px-1">
            <strong>{fullName}</strong>
          </span>
          داخل وبسایت ثبت نام کرد
        </p>
        <p className="dark:text-neutral-400 text-neutral-700">{email}</p>
      </div>
    </article>
  );
};

export default UserCard;
