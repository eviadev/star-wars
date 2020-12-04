import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const fetchData = async () => {
  let data = await fetch("https://swapi.dev/api/people/")
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
  return data;
};

export default function App() {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const initialData = useRef();

  useEffect(() => {
    async function getData() {
      let data = await fetchData();
      initialData.current = data.results;
      setData(data.results);
    }
    getData();
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    let res = [];
    for (var i = 0; i < initialData.current.length; i++) {
      if (
        initialData.current[i].name.toLowerCase().includes(search.toLowerCase())
      ) {
        res.push(initialData.current[i]);
      }
    }
    setData(res);
  }

  if (data) {
    return (
      <div className="App">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button>Search</button>
        </form>

        {data.length <= 0 ? (
          <p> No data found ! </p>
        ) : (
          data.map((item, i) => {
            return <p key={i}> {item.name} </p>;
          })
        )}
      </div>
    );
  } else {
    return <h1> loading </h1>;
  }
}