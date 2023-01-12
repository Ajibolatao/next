import React from "react";
import { useSession } from "next-auth/react";
import { Container } from "react-bootstrap";
import Image from "next/image";



export default function Index() {
  const { data: session } = useSession();

 
  return (
    <>
      <div className="display-4 text-center">Home page</div>
      <Container>
        {session && (
          <>
            <div className="display-6">
              <div>
                Username: <strong>{session.user.name}</strong>{" "}
              </div>
              {/* <Image src={myGitPic} width={200} height={500} alt="My picture" /> */}
            </div>
          </>
        )}
      </Container>
    </>
  );
}
