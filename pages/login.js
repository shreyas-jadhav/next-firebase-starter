import FirebaseAuth from "@/elements/FirebaseAuth";
import { AuthAction, withAuthUser } from "next-firebase-auth";

const Login = () => {
  return (
    <div className="container mx-auto my-20 p-5 border-1">
      <h1 className="text-center text-5xl font-bold">Login / Register</h1>
      <hr className="text-gray my-10" />
      <FirebaseAuth />
    </div>
  );
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.REDIRECT_TO_APP,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_APP,
})(Login);
