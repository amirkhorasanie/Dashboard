import { useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { useNavigate } from "react-router";
import Summaries from "../../features/Summaries/Summaries";
import DetailsCharts from "../../features/DetailsCharts/DetailsCharts";
import Table from "../../components/common/Table/Table";
import LastProductTable from "../../features/LastProductTable/LastProductTable";

const Home = () => {
  
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();
  
  const toggle = () => {
    setIsRedirecting(!isRedirecting);
  };

  const CATButton = () => {
    const clickHandler = () => {
      toggle();
      navigate("/products")
    }
    return <button onClick={clickHandler} className="bg-cyan-300 text-cyan-900 dark:bg-cyan-900 dark:text-cyan-300 px-5 py-2 rounded-2xl hover:rounded-sm hover:transition-all font-semibold duration-500">
      {isRedirecting ? "در حال انتقال" : "ایجاد محصول"} 
    </button>
  }

  return(
  <>
  <SectionTitle title="داشبورد" Buttons={<CATButton />} />
  <Summaries />
  <div>
    <DetailsCharts />
  </div>
  <div className="sm:hidden flex w-full justify-center mt-5 font-semibold rounded-2xl items-center dark:text-cyan-300 dark:bg-cyan-900  bg-cyan-400 text-cyan-900 p-2">
    <p>لطفا برای نمایش لیست محصولات با لپ تاپ وارد شوید</p>
  </div>
  <div className="hidden sm:block">
    <LastProductTable />
  </div>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </>
  )
};

export default Home;
