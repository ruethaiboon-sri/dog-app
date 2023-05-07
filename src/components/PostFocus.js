import "./PostFocus.css";
export default function PostFocus(props) {
  const { dog, onBgClick } = props;
  return (
    <>
      <div className="large-post">
        <div className="large-post-bg" onClick={onBgClick} />
        <div className="large-post-content">
          <img alt={dog.title} src={dog.thumbnail} />
          <h4>{dog.title}</h4>
        </div>
      </div>
    </>
  );
}
