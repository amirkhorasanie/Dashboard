import Pagination from "../../common/Pagination";
import TableHeader from "./TableHeader";

const Table = ({
  header = { title: "لیست آیتم‌ها", Buttons: undefined },
  children,
  pagination = null, // اگر pagination نداشتیم null
}) => {
  const hasPagination =
    pagination &&
    Array.isArray(pagination.items) &&
    typeof pagination.setItems === "function";

  return (
    <div className="mt-5 rounded-3xl min-w-full bg-white dark:bg-neutral-900">
      <TableHeader header={header} />
      <div>{children}</div>

      {hasPagination && (
        <Pagination
          items={pagination.items}
          setItems={pagination.setItems}
          itemsPerPage={pagination.itemsPerPage || 5}
        />
      )}
    </div>
  );
};

export default Table;


