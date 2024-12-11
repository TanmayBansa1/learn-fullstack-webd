import axios from "axios";

async function fetchData() {
  await new Promise((r) => setTimeout(r, 5000));
  const res = await axios.get(
    "http://localhost:3000/api/user"
  );
  return res.data;
}

export default async function User() {
  const data: {
    email: string;
    name: string;
  } = await fetchData();

  return (
    <div>
      {data.email}
      <p></p>
      <p></p>
      {data.name}
      <p></p>
      {/* {data.address} */}
    </div>
  );
}
