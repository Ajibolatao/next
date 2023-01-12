import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

const Restricted =  async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    return res.redirect('/dashboard')
   } else {
      return res.send({
         error:
         "You must be signed in to view the protected content on this page.",
      });
   }
   
};

export default  Restricted