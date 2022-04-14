function CatItem(props) {
  function handleClick() {
    const currentIndex = [...props.favorites].indexOf(props.img);
    props.onDeleteClick(currentIndex);
  }
  return (
    <li>
      <div style={{ position: "relative" }}>
        <img
          alt=""
          src={props.img}
          style={{ width: "150px", border: "1px solid red" }}
        />
        <button
          onClick={handleClick}
          style={{ position: "absolute", left: "0" }}
        >
          delete
        </button>
      </div>
    </li>
  );
}

export default CatItem;
