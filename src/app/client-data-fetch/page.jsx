"use client";

import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

export default function ClientSideDataFetching() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();

      if (result?.users) {
        setUsers(result.users);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setUsers([]);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  if (loading) {
    return (
      <h3 className="font-extrabold text-3xl">Loading users! Please wait...</h3>
    );
  }
  return (
    <>
      <div>
        <h1>Client Side Data Fetching</h1>
        <ul>
          {users && users.length > 0
            ? users.map((user) => {
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
