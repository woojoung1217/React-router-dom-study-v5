import queryString from "query-string";
export default function About(props) {
  const searchParams = props.location.serach;
  const query = queryString.parse(searchParams);
  console.log(query);
  return (
    <div>
      <h2>About PAGE 입니다</h2>
      {query.name && <p> name 은 {query.name} 입니다.</p>}
    </div>
  );
}
