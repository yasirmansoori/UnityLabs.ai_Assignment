import hacker from "./Images/hacker-gif.gif";
import Post from "./Components/Post/Post";
import { useEffect, useState } from "react";
import RightSidebar from "./Components/Sidebar/RightSidebar";
function Content() {
  const [dataContent, setDataContent] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // Helper function to convert the date from the API to a more readable format
  function OriginalDate(created_at) {
    const timestamp = created_at * 1000;
    const date = new Date(timestamp);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-based, so we add 1
    const year = date.getUTCFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }
  useEffect(() => {
    const fetchData = async () => {
      const URL =
        "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=8";
      try {
        const response = await fetch(URL);
        const data = await response.json();
        const dataContent = data.hits;
        setFeaturedPost(dataContent.slice(0, 2));
        setDataContent(dataContent.slice(2, 8));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // This handleSearch function is used to search the posts
  const handleSearch = async () => {
    try {
      const searchURL = `https://hn.algolia.com/api/v1/search?query=${query}&hitsPerPage=10`;
      const response = await fetch(searchURL);
      const searchData = await response.json();
      setSearchResults(searchData.hits);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  // This renderPosts function is used to render the posts
  const renderPosts = () => {
    if (query && searchResults.length > 0) {
      return (
        <div className="row g-3">
          {searchResults.map((result, index) => (
            <Post
              key={index}
              title={result.title}
              author={result.author}
              created_at={result.created_at_i}
              itemID={result.objectID}
            />
          ))}
        </div>
      );
    } else {
      return (
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
      );
    }
  };

  return (
    <main className="container my-2">
      {/* Hero Section */}
      <div className="p-4 p-md-5 mb-4 d-flex gap-2 rounded " id="HeroSection">
        <div className="col-lg-6 px-0">
          <h1 className="display-4 fst-italic">Explore the Code Realm:</h1>
          <p className="lead my-3">
            Discover tech&apos;s heartbeat with our Hacker News Search. Find the
            latest, trendiest discussions instantly. Stay in the loop,
            effortlessly.
          </p>
          {/* Search Section */}
          <div className="input-group mb-3 w-50">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search posts"
              aria-describedby="button-addon2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={handleSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="mx-3"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </button>
          </div>
        </div>
        {/* Search Section end */}
        <div className="col-lg-6 px-0">
          <img
            src={hacker}
            alt="Hacker-GIF"
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>
      {/* Featured Posts */}
      <div className="row mb-2">
        {/* Featured Posts 1 */}
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">
                {featuredPost
                  ? featuredPost[0].title
                  : "Loading post title... "}
              </h3>
              <div className="mb-1 ">
                {featuredPost
                  ? OriginalDate(featuredPost[0].created_at_i)
                  : "Loading post date..."}
              </div>
              <p className="card-text mb-auto">
                {featuredPost ? featuredPost[0].text : "Loading post text..."}
              </p>
              <a
                href={featuredPost ? featuredPost[0].url : "#"}
                className="icon-link gap-1 icon-link-hover stretched-link"
              >
                Continue reading
              </a>
            </div>
          </div>
        </div>
        {/* Featured Posts 1 end*/}
        {/* Featured Posts 2 */}
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">
                {featuredPost
                  ? featuredPost[1].title
                  : "Loading post title... "}
              </h3>
              <div className="mb-1 ">
                {featuredPost
                  ? OriginalDate(featuredPost[0].created_at_i)
                  : "Loading post date..."}
              </div>
              <p className="mb-auto">
                {featuredPost ? featuredPost[0].text : "Loading post text..."}
              </p>
              <a
                href={featuredPost ? featuredPost[0].url : "#"}
                className="icon-link gap-1 icon-link-hover stretched-link"
              >
                Continue reading
              </a>
            </div>
          </div>
        </div>
        {/* Featured Posts 2 end*/}
      </div>
      {/* Featured Posts end*/}
      {/* Hero Section end */}

      {/* Article Section */}
      <div className="row g-5">
        {/* Left SideBar */}
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            {query ? `Search results for "${query}"` : "From Tech Savvy"}
          </h3>
          {renderPosts()}
        </div>
        {/* Left SideBar end */}

        {/* Right SideBar */}
        <RightSidebar />
        {/* Right SideBar end */}
      </div>
      {/* Article Section end */}
    </main>
  );
}

export default Content;
