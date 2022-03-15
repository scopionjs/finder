import useRouter from "next/router";
import Head from "next/head";
import axios from "axios";
import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/nav";
import Link from "next/link";
import handler from "./api/hello";
export async function getStaticProps() {
  let data = await axios.get(
    "http://universities.hipolabs.com/search?country=zambia"
  );
  let data2 = await axios.get(
    "http://universities.hipolabs.com/search?country=zambia"
  );
  return {
    props: {
      data: { data: data.data, data2: data2.data },
    },
  };
}
export default function Home({ data, data2 }) {
  let [text, setText] = React.useState();
  let handleSearch = () => {
    useRouter.push(`/search/${text}`);
  };
  return (
    <div>
      <Head>
        <title>find universities found in any country</title>
      </Head>
      <Nav />
      <div className="top">
        <h2>find the universities available in any country </h2>
        <p>enter the country's name</p>
      </div>
      <div className="search-bar">
        <input
          type="search"
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder="country"
        />
        <button onClick={handleSearch}>search</button>
      </div>
      <div className="content">
        {data.data.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>
              {" "}
              found in: <span>{item.country}</span>
            </p>
            <Link href={item.web_pages[0]}>
              <a>visit</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
