  import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function LandingPage() {
  return <div>
    <LoginLink>Sign in</LoginLink>
    <RegisterLink>Sign up</RegisterLink>
  </div>;
}
