import Nav from "../../components/nav";
import axios from "axios";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
export async function getServerSideProps(ctx) {
  let data = await axios.get(
    `http://universities.hipolabs.com/search?country=${ctx.params.query}`
  );
  return {
    props: {
      data: data.data,
    },
  };
}
export default function Search({ data }) {
  let path = useRouter();

  return (
    <>
      <Head>
        <title>universities found in {path.query.query}</title>
      </Head>
      <Nav />

      <div className="content">
        {
          data[0] == undefined ? (
            <p className="not-found">
              universities for {path.query.query} are not found...
            </p>
          ) : (
            data.map((item, index) => (
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
            ))
          )
          /* expressions*/
        }
      </div>
    </>
  );
}
