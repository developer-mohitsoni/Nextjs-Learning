import Link from "next/link";

const fetchListOfUsers = async () => {
  try {
    const apiResponse = await fetch("https://dummyjson.com/users", {
      cache: "no-store",
    });

    const result = await apiResponse.json();

    return result.users;
  } catch (err) {
    throw new Error(error);
  }
};

const ServerSideDataFetching = async () => {
  const listOfUsers = await fetchListOfUsers();

  console.log(listOfUsers);

  return (
    <>
      <div className="p-10">
        <h1>Server Side Data Fetching : User List Page</h1>
        <ul>
          {listOfUsers && listOfUsers.length > 0
            ? listOfUsers.map((user) => {
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
};

export default ServerSideDataFetching;
