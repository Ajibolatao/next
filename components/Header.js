import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand>
            <Link
              href={"/"}
              className="text-decoration-none display-4 text-white">
              NEXT AUTH
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 justify-content-end align-items-center gap-4">
              <Link href={`/`} className="btn btn-outline-info">
                Home
              </Link>
              <Link href={`/dashboard`} className="btn btn-outline-info">
                Dashboard
              </Link>
              <Link href={`/blog`} className="btn btn-outline-info">
                Blog
              </Link>
              {/* <Link href={`/api/auth/signin`} className="btn btn-outline-info">
                Sign in
              </Link> */}
              {/* <Link href={`/api/auth/signout`} className="btn btn-outline-info"> 
                Sign out
              </Link>*/}
              {!session && (
                <>
                  <div
                    className="btn btn-outline-info"
                    onClick={(e) => signIn()}>
                    Sign in
                  </div>
                </>
              )}
              {session && (
                <>
                  <div
                    className="btn btn-outline-info"
                    onClick={(e) => signOut()}>
                    Sign out
                  </div>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
