const Description = (props) => {
  console.log(props); // {content: "...", color: "...", name: "..."}
  return (
    // La className du p dépend de la props color et son contenu dépend des props content et name
    <p className="description">{props.text}</p>
  );
};

export default Description;
