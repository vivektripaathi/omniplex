import styles from "@/styles/Home.module.css";
import AuthWrapper from "./AuthWrapper";
import MainPrompt from "../components/MainPrompt/MainPrompt";
import Sidebar from "@/components/Sidebar/Sidebar";

const Home = () => {
  return (
    <AuthWrapper>
      <Sidebar />
      <div className={styles.main}>
        <MainPrompt />
      </div>
    </AuthWrapper>
  );
};

export default Home;
