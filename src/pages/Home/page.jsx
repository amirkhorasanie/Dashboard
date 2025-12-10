import { useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { useNavigate } from "react-router";
import Summaries from "../../features/Summaries/Summaries";
import DetailsCharts from "../../features/DetailsCharts/DetailsCharts";

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
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </>
  )
};

export default Home;
