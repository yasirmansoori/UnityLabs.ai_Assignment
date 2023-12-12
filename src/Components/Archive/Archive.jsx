import { useEffect, useState } from "react";
import Post from "../Post/Post";
import RightSidebar from "../Sidebar/RightSidebar";
import { useParams } from "react-router-dom";
function Archive() {
  const [dataContent, setDataContent] = useState([]);
  const { month } = useParams();

  // This is the map of the months and their start and end dates in Unix time
  const monthMap = {
    January: { start: 1640995200, end: 1641081600 },
    February: { start: 1643673600, end: 1643759999 },
    March: { start: 1646092800, end: 1646179199 },
    April: { start: 1648771200, end: 1648857599 },
    May: { start: 1651363200, end: 1651449599 },
    June: { start: 1654041600, end: 1654127999 },
    July: { start: 1656633600, end: 1656720000 },
    August: { start: 1659312000, end: 1659398399 },
    September: { start: 1661990400, end: 1662076799 },
    October: { start: 1664582400, end: 1664668799 },
    November: { start: 1667260800, end: 1667347199 },
    December: { start: 1669852800, end: 1669939199 },
  };
  const { start, end } = monthMap[month];

  useEffect(() => {
    const fetchData = async () => {
      const URL = `https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>${start},created_at_i<${end}&hitsPerPage=20`;
      try {
        const response = await fetch(URL);
        const data = await response.json();
        const dataContent = data.hits;
        setDataContent(dataContent);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [start, end, month]);

  return (
    <div className="container my-2">
      <div className="row g-5">
        {/* Left SideBar */}
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            {month} 2023 Archive
          </h3>
          <div className="row g-3">
            {dataContent.map((post, index) => (
              <Post
                key={index}
                title={post.title}
                author={post.author}
                created_at={post.created_at_i}
                itemID={post.objectID}
              />
            ))}
          </div>
        </div>
        {/* Left SideBar end */}

        {/* Right SideBar */}
        <RightSidebar />
        {/* Right SideBar end */}
      </div>
    </div>
  );
}

export default Archive;
