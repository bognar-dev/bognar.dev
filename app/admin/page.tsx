import Button from "@/components/button";

export default function SignupPage() {
  const createAccount = async (formData: FormData) => {
    "use server";

    const username = formData.get("username");
    const password = formData.get("password");
    const user = {
      username,
      password
    }
    console.log({username, password });
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
        // You can add other headers as needed, e.g., authentication tokens
      },
      body: JSON.stringify(user), // Convert the data object to a JSON string
    };
    const response = await fetch(`${process.env.BACKEND_URL}/login`,options)
    const data = await response.json();
    console.log(data)
      const statusResp = await fetch(`${process.env.BACKEND_URL}/private/status`)
      const status = await statusResp.json();
      console.log(status)
    
    
  };

  return (
    <form action={createAccount} method="POST">
      <input type="username" name="username" required/>
      <input type="password" name="password" required/>
      <Button>
      <button type="submit">Login</button>
      </Button>
    </form>
  );
}