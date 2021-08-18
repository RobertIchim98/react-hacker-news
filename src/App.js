import "./App.css";
import { useEffect, useState } from "react";
import { getNewStoryIds } from "./APICalls/getApiStories";

import { StoryTemplate } from "./WebsiteElements/StoryTemplate";

import ReactPaginate from "react-paginate";

const App = () => {
  const [newStories, setnewStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState([]);

  //dictates how many posts a page
  const PER_PAGE = 10;

  useEffect(() => {
    getNewStoryIds().then((stories) => {
      setnewStories(stories);
    });
  }, []);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * PER_PAGE;

  const currentPageData = newStories
    .slice(offset, offset + PER_PAGE)
    .map((storyId) => {
      return (
        <StoryTemplate
          storyId={storyId}
          key={storyId}
          searchTerm={searchTerm}
        />
      );
    });

  const pageCount = Math.ceil(newStories.length / PER_PAGE);

  // I could solve this by moving the whole pagination onto the story component too and there I would check
  //if the textbox has an imput, if it does display only the relevand results, if not display the whole
  // shebang with the pagination too

  return (
    <main>
      <header>
        <div className="header-logo">
          <p>Hacker News</p>
        </div>
        <div className="header-tool">
          <input
            type="text"
            name="news-filter"
            placeholder="Search Article"
            onChange={(term) => {
              setSearchTerm(term.target.value);
            }}
          />
        </div>
      </header>

      <div className="page-margin">
        {currentPageData}
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </main>
  );
};

export default App;

/*

{newStories.map((storyId) => (
          <StoryTemplate storyId={storyId} key={storyId} />
        ))}

        */
