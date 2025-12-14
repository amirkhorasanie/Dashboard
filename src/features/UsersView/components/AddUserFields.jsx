import React from 'react'

const AddUserFields = ({ newUser, onChange }) => {
  const fields = [
    { label: "نام کاربری", key: "userName", type: "text" },
    { label: "نام و نام خانوادگی", key: "fullName", type: "text" },
    { label: "پست الکترونیکی", key: "email", type: "text" },
    { label: "شماره موبایل", key: "phoneNumber", type: "number" },
    { label: "ارشدیت کاربر", key: "roles", type: "select" },
  ];

  const handleChange = (key, value) => {
    onChange({
      ...newUser,
      [key]: key === "phoneNumber" ? Number(value) : value
    });
  }

  return (
    <div>
      {fields.map((field) => (
        <div key={field.key}>
          <label className="text-xs select-none text-neutral-500">{field.label}</label>
          {field.type === "select" ? (
            <select
              className={`block mt-2 px-3 rounded-3xl shadow placeholder:text-sm h-10 outline-none w-full border-2 transition
                ${newUser[field.key] === "user" && "bg-blue-200 border-blue-400"}
                ${newUser[field.key] === "manager" && "bg-green-200 border-green-400"}
                ${newUser[field.key] === "admin" && "bg-red-200 border-red-400"}
              `}
              value={newUser[field.key] || ""}
              onChange={(e) => handleChange(field.key, e.target.value)}
            >
              <option value="">انتخاب نقش</option>
              <option value="user">کاربر</option>
              <option value="manager">مدیر</option>
              <option value="admin">پشتیبانی</option>
            </select>
          ) : (
            <input
              type={field.type}
              className="block mt-2 px-3 rounded-3xl bg-neutral-200 dark:bg-neutral-800 shadow placeholder:text-sm h-10 outline-none w-full border-2 border-neutral-300 dark:border-neutral-700"
              value={newUser[field.key] || ""}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default AddUserFields
