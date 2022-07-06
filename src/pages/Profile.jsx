import queryString from 'query-string';

export default function Profile(props) {
  console.log(props);
  const id = props.match.parmas.id;
  console.log(id, typeof id);
  return <div>Profile PAGE 입니다</div>;
}