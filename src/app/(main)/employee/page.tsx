import PostTable from "@/components/posts/PostTable";
import PostsPagination from "@/components/posts/TablePagination";

const EmployeePage = () => {
  return (
    <div className="space-y-4">
      <PostTable title="Employee Details" />
      <PostsPagination />
    </div>
  );
};

export default EmployeePage;
