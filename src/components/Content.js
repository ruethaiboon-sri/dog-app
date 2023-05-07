import "./Content.css";

export default function Content(props) {
  const { dog, onDogClick } = props;
  return (
    <>
      <div className="item">
        <img
          alt={dog.title}
          src={dog.thumbnail}
          onClick={() => {
            onDogClick(dog);
          }}
        />
        <h4>{dog.title}</h4>
      </div>
    </>
  );
}
