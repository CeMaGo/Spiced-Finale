import Head from "next/head";

import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useSession, getSession, signOut } from "next-auth/react";
import Layout from "@/layout/layout";

export default function Home() {
  // const [Session, setSession] = useState(true);
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
    <main className=" bg-scroll container mx-auto align-middle justify-evenly ">
      <h3 className="text-4xl text-slate-700 font-bold py-10">
        Oh, How Wonderful!!! it"s You!...
        <br />
        <span className="text-slate-200">again</span>
      </h3>

      <div className="details">
        <h5 className="text-3xl text-cyan-700 font-semibold ">
          {session.user.name}
        </h5>
        <h5 className="text-1xl text-slate-300  ">{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className="mt-5 px-5 py-1 rounded-sm bg-gradient-to-br from-indigo-400 to bg-indigo-500 text-gray-50"
        >
          Sign out
        </button>
      </div>

      <div className="flex justify-center">
        <Link
          href={"/profile"}
          className="mt-5 px-10 py-1 rounded-sm bg-gradient-to-br from-violet00 to bg-violet-400 text-gray-50"
        >
          Profile Page
        </Link>
      </div>
      <hr className=" mt-6 "></hr>
      <div className="flex justify-center">
        <Link
          href={"/player"}
          className="m-5 p-10 py-1 rounded-sm bg-gradient-to-br from-purple-400 to bg-purple-600 text-gray-50"
        >
          Play
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
  console.log("session success");
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
