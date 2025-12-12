import TableHeader from "./Elements/TableHeader";
import Pagination from "./../../common/Pagination";

const Table = ({
  header = { title: "لیست آیتم ها", Buttons: undefined },
  children,
  pagination = {
    items: null,
    setItems: null,
    itemsPerPage: null,
  },
}) => {
  return (
    <div className='mt-5 rounded-3xl min-w-full bg-white dark:bg-neutral-900'>
      <TableHeader header={header} />
      <div>{children}</div>

      <Pagination
        items={pagination.items}
        setItems={pagination.setItems}
        itemsPerPage={pagination.itemsPerPage}
      />
    </div>
  );
};

export default Table;

