Works together with secLogin.js

import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const account = () => {
  const { date: session, status } = useSession({ require: true });

  if (status === "authenticated") {
    return (
      <div>
        <p>Welcome{session.user.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed In</p>
      </div>
    );
  }
};

export default account;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: { session },
  };
};
