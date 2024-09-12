import { redirect } from "next/navigation";

export default function Accounts() {
  // assume that profile info is null

  const userProfileInfo = null;

  if (userProfileInfo === null) {
    redirect("profile");
  }
  return <h1>Accounts</h1>;
}
