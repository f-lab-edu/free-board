import ContentBox from "./components/Common/ContentBox/ContentBox";
import SideComp from "./components/SideComp/SideComp";
import { dataList } from "./dataList";

export default function Home() {

  return (
    <div style={{ display: "flex" }}>
      <div className="contentScroll">
        {dataList.map(data => {
          return <ContentBox data={data} />
        })}
      </div>
      <div style={{ width: "60px" }} />
      <SideComp />
    </div>
  );
}
