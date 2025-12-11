import TableHeader from "./Elements/TableHeader"

const Table = ({ header = { title: "لیست آیتم ها", Button: undefined }, children }) => {
  return (
    <div className='mt-5 rounded-3xl min-w-full bg-white dark:bg-neutral-900'>
      <TableHeader header={header} />
        {children}
    </div>
  )
}

export default Table