import { signIn, useSession } from "next-auth/react";
import { Button, Container } from "react-bootstrap";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <p>Hello {session.user.email}</p>
        <div>This is the dashboard page</div>
      </>
    );
  }

  return (
    <>
      <Container>
        <div className="py-4">You wiil have to sign in please</div>
        <div onClick={(e) => signIn()}>
          <Button variant="primary">Sign in</Button>{" "}
        </div>
      </Container>
    </>
  );
}
