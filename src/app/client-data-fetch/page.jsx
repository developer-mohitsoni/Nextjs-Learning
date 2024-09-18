"use client";

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ClientSideDataFetching() {
  // const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);

  // async function fetchListOfUsers() {
  //   try {
  //     setLoading(true);
  //     const apiResponse = await fetch("https://dummyjson.com/users");
  //     const result = await apiResponse.json();

  //     if (result?.users) {
  //       setUsers(result.users);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setUsers([]);
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchListOfUsers();
  // }, []);

  //! fetch data using (swr)

  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/users",
    fetcher
  );

  if (error) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return (
      <h3 className="font-extrabold text-3xl">Loading users! Please wait...</h3>
    );
  }
  return (
    <>
      <div>
        <h1>Client Side Data Fetching</h1>
        <ul>
          {data && data?.users && data?.users.length > 0
            ? data?.users.map((user) => {
                return (
                  <li className="mt-5 cursor-pointer">
                    <Link href={`/server-data-fetch/${user.id}`}>
                      {user.firstName}
                    </Link>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </>
  );
}
