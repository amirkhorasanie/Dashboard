import { CiGrid41, CiViewTable } from "react-icons/ci";
import SectionTitle from "./../../components/common/SectionTitle";
import { useEffect, useState } from "react";
import { products } from "./../../data/products";
import ProductTableView from "../../features/ProductsView/ProductsTableView";
import ProductsGridView from "./../../features/ProductsView/ProductsGridView";
import Modal from "./../../components/common/Modal"
import AddProductFields from "../../features/ProductsTable/Components/AddProductFields";
import { IoMdAdd } from "react-icons/io";

const Products = () => {
  const [layoutType, setLayoutType] = useState("GRID"); // or GRID
  const [allProducts, setAllProducts] = useState([...products])
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    price: "",
    img: "/images/17pro.png",
    isPublished: false,
    entity: "",
  })

  const toggleLayout = () => {
    const layout = layoutType === "GRID" ? "TABLE" : "GRID";
    setLayoutType(layout);
  };
  
  const createNewProduct = () => {
    setAllProducts([...allProducts, newProduct])

    setNewProduct({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    price: "",
    img: "/images/17pro.png",
    isPublished: false,
    entity: "",
    });
  }
  
  const Buttons = (
    <>
      <button
        onClick={toggleLayout}
        className="text-2xl size-10 flex-center hover:rounded-sm text-cyan-900 bg-cyan-400 dark:text-cyan-300 dark:bg-cyan-900 *:stroke-1 rounded-[14px] duration-150 transition-all cursor-pointer"
      >
        {layoutType === "TABLE" ? <CiGrid41 /> : <CiViewTable />}
      </button>
      
      <Modal 
      title="ایجاد محصول جدید"
      Trigger={
          <button className="dark:bg-cyan-900 flex gap-1 transition-all hover:rounded-sm dark:text-cyan-400  text-cyan-900 bg-cyan-400 font-semibold px-4 py-2 rounded-2xl">
            <IoMdAdd className="text-2xl"/> ایجاد محصول
          </button>
        }
        onSubmit={createNewProduct}
      >
        <AddProductFields newProduct={newProduct} onChange={setNewProduct}/>
      </Modal>
    </>
  );

  return (
    <>
      <SectionTitle title="لیست محصولات" Buttons={Buttons} />

      <section className="mt-10 w-full! min-w-full!">
        {layoutType === "TABLE" ? (
          <ProductTableView
            products={allProducts}
            paginatedProducts={paginatedProducts}
            setProducts={setPaginatedProducts}
          />
        ) : (
          <ProductsGridView
            products={allProducts}
            paginatedProducts={paginatedProducts}
            setProducts={setPaginatedProducts}
          />
        )}
      </section>
    </>
  );
};

export default Products;
