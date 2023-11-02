
import Button from "@/components/button";
import { signIn } from '@/app/actions';





export default function SignupPage() {
  

  return (
    
    <form action={signIn} method="POST">
      <input type="username" name="username" required/>
      <input type="password" name="password" required/>
      <Button>
      <button type="submit">Login</button>
      </Button>
      <p aria-live="polite" className="sr-only">
      </p>
    </form>
  );
}


