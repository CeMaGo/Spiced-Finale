import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useSession, getSession, signOut } from "next-auth/react";
import Layout from "@/layout/layout";

export default function Home() {
  // const [Session, setSession] = useState(false);
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page, hello World</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  );
}
// Guest only read, no edit
function Guest() {
  return (
    <Layout>
      <main className="container mx-auto text-center py-20">
        <h3 className="text-4xl font-bold">Guest Homepage, Just Visiting</h3>

        <div className="flex justify-center">
          <Link
            href={"/login"}
            className="mt-5 px10 py-1 rounded-sm bg-violet-500 text-gray-50"
          >
            Sign In
          </Link>
        </div>
      </main>
    </Layout>
  );
}
// now Authorized User

function User({ session, handleSignOut }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl text-slate-700 font-bold py-10">
        Good to have you...back?!
      </h3>

      <div className="details">
        <h5 className="text-3xl text-cyan-900 font-semibold ">
          {session.user.name}
        </h5>
        <h5 className="text-1xl text-slate-500  ">{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className="mt-5 px-1- py-1 rounded-sm bg-indigo-500 text-gray-50"
        >
          Sign out
        </button>
      </div>

      <div className="flex justify-center">
        <Link
          href={"/profile"}
          className="mt-5 px10 py-1 rounded-sm bg-violet-500 text-gray-50"
        >
          Profile Page
        </Link>
      </div>
    </main>
  );
}

// req returns cookie
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

// useEffect(() => {
//   const fetchData = async () => {
//     const res = await fetch(`http://localhost:3000/api/tasks`);
//     const data = await res.json();
//     console.log(data);
//   };
//   fetchData();
// }, []);
// if (session) {
//   return (
//     <>
//       Signed In as {session.user.email}
//       <br />
//       <button
//         onClick={() => {
//           singOut();
//         }}
//       >
//         Sign Out
//       </button>
//     </>
//   );

// return<>
//   Not signed In  <br/>
//   <button onClick={()=>{signIn()}}>Sign In</button>
// </>
