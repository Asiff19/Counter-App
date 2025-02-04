export default function Notedetail(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="Notearea">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}
