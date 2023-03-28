export default function FloraPage(props) {
  console.log(props);
  return <h2>{props.params.floraTitle}</h2>;
}
