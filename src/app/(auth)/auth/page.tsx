import AuthTabs from "@/components/auths/auth-tabs";
import ThemeToggle from "@/components/theme/theme-toggle";

const AuthPage = () => {
  return (
    <>
      <AuthTabs />
      <span className="absolute top-8 right-8">
        <ThemeToggle />
      </span>
    </>
  );
};

export default AuthPage;
