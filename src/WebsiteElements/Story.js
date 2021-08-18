import { storyComments } from "../APICalls/apiEndPoints";
import "../App.css";

export const Story = ({ story, domain }) => {
  return (
    <div className="news-card">
      {" "}
      {story ? (
        <>
          <div className="news-card-counter">
            <p> 1. </p>{" "}
          </div>{" "}
          <div className="news-card-body">
            <div className="card-title">
              {" "}
              {}{" "}
              <a
                className="title"
                href={domain ? story.url : storyComments + story.id}
              >
                {story.title}{" "}
              </a>{" "}
              <span className="title-url">
                {" "}
                {domain ? "(" + domain + ")" : null}{" "}
              </span>{" "}
            </div>{" "}
            <div className="card-stats">
              <span className="stats">
                {" "}
                {story.score}
                points by{" "}
                <a
                  className="stats"
                  href={`https://news.ycombinator.com/user?id=${story.by}`}
                >
                  {story.by}{" "}
                </a>{" "}
                {story.time} | hide |{" "}
                <a className="stats" href={storyComments + story.id}>
                  {" "}
                  {story.descendants}
                  comments{" "}
                </a>{" "}
              </span>{" "}
              <span> </span>{" "}
            </div>{" "}
          </div>{" "}
        </>
      ) : null}{" "}
    </div>
  );
};
