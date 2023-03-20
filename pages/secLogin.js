// import React from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
// import Link from "next/link";

// const SecLogin = () => {
//   const { data: session } = useSession();
//   console.log("session:", session);

//   if (session) {
//     <div>
//       <p>Welcome {session.user.email}</p>
//       <img
//         src={session.user.image}
//         className="rounded-full"
//         alt={"User account Image"}
//       ></img>
//       <button onClick={() => signOut()}>Sign Out</button>
//     </div>;
//   } else {
//     <div>
//       <p>You are currently not signed it</p>
//       <Link href={"/register"} className="text-blue-700">
//         Register
//       </Link>
//       <button onClick={() => signIn()}>Sign In</button>
//     </div>;
//   }
// };
// export default SecLogin;
