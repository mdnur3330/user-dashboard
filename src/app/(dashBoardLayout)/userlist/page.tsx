import UserList from "@/component/AllUser";
import { fetchUsers } from "@/lib";
import { User } from "@/type/Type";


const Page = async () => {
  const users: User[] = await fetchUsers();
 
  return <UserList users={users} />;
};

export default Page;