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
      <div>
        <h1>Server Side Data Fetching</h1>
        <ul>
          {listOfUsers && listOfUsers.length > 0
            ? listOfUsers.map((user) => {
                return <li>{user.firstName}</li>;
              })
            : null}
        </ul>
      </div>
    </>
  );
};

export default ServerSideDataFetching;
