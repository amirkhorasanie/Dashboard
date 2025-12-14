import React from "react";

const AddProductFields = ({ newProduct, onChange }) => {
  const fields = [
    { label: "عنوان محصول", key: "title", type: "text" },
    { label: "وضعیت انتشار", key: "isPublished", type: "select" },
    { label: "تعداد موجودی", key: "entity", type: "number" },
    { label: "قیمت محصول", key: "price", type: "number" },
    { label: "توضیحات محصول", key: "description", type: "textarea" },
  ];

  const handleChange = (key, value) => {
    const product = {
      ...newProduct,
      [key]:
        key === "price" || key === "entity"
          ? Number(value)
          : key === "isPublished"
          ? Boolean(value)
          : value,
    };
    onChange(product);
  };

  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field.key}>
          <label className="text-xs select-none text-neutral-500">
            {field.label}
          </label>

          {field.type === "textarea" ? (
            <textarea
              className="block mt-2 text-sm min-h-[140px] px-3 rounded-3xl bg-neutral-200 dark:bg-neutral-800 shadow placeholder:text-sm outline-none w-full border-2 border-neutral-300 dark:border-neutral-700"
              value={newProduct[field.key] || ""}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          ) : field.type === "select" ? (
            <select
              className="block mt-2 px-3 rounded-3xl bg-neutral-200 dark:bg-neutral-800 shadow placeholder:text-sm h-10 outline-none w-full border-2 border-neutral-300 dark:border-neutral-700"
              value={newProduct[field.key] ? "true" : "false"}
              onChange={(e) =>
                handleChange(field.key, e.target.value === "true")
              }
            >
              <option value="true">منتشر شده</option>
              <option value="false">منتشر نشده</option>
            </select>
          ) : (
            <input
              type={field.type}
              className="block mt-2 px-3 rounded-3xl bg-neutral-200 dark:bg-neutral-800 shadow placeholder:text-sm h-10 outline-none w-full border-2 border-neutral-300 dark:border-neutral-700"
              value={newProduct[field.key] || ""}
              onChange={(e) => handleChange(field.key, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default AddProductFields;
