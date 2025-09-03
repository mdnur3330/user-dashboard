import UserList from "@/component/AllUser";
import { getServerSideProps } from "@/lib";
import { User } from "@/type/Type";


const Home = async () => {
  const users: User[] = await getServerSideProps();
 
  return <UserList users={users} />;
};

export default Home;