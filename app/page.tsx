import client from "./db"

async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
	  return {
      name: user?.username,
      email: user?.username
    }
  }  catch(e) {
    console.log(e);
  }
}

export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userDetails?.name}
                </div>
                
                {userDetails?.email}
            </div>
        </div>
    </div>
  )
}
