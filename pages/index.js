import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../components/AuthContext";

export default function Index({ user, projects, events, loggedIn }) {
  const auth = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      router.push("/login");
  }, [router]);

  return <div>home</div>;
}

export async function getServerSideProps({ req, res }) {
  return {
    props: {
    }
  };
}
