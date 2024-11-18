async function fetchSingleUserDetails(currentUserId) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/users/${currentUserId}`
    );

    const result = await apiResponse.json();

    return result;
  } catch (error) {
    throw new Error(error);
  }
}

export default async function UserDetails({ params }) {
  //   console.log(params);

  const userDetails = await fetchSingleUserDetails(params.details);

  return (
    <>
      <div>
        <h1>This is user detail page</h1>
        <p>{`Name:- ${userDetails?.firstName} ${userDetails?.lastName}`}</p>
        <p>{`Age:- ${userDetails?.age}`}</p>
        <p>{`Email:- ${userDetails?.email}`}</p>
        <p>{`Phone:- ${userDetails?.phone}`}</p>
        <p>{`BirthDate:- ${userDetails?.birthDate}`}</p>
      </div>
    </>
  );
}
