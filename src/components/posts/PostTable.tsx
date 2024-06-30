import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import posts from "@/data/posts";
import Link from "next/link";
import { Button } from "../ui/button";

const PostTable = ({ title }: { title?: string }) => {
  return (
    <div>
      <h3 className="mb-4 text-2xl font-semibold ">{title}</h3>
      <Table>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead className="text-right">Date</TableHead>
            <TableHead className="text-center w-[100px]">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => {
            return (
              <TableRow key={post.id}>
                <TableCell className="font-medium">{post.name}</TableCell>
                <TableCell>@{post.username}</TableCell>
                <TableCell className="text-right">{post.date}</TableCell>
                <TableCell className="">
                  <Link href={`/posts/${post.id}`}>
                    <Button className="bg-blue-500 font-semibold hover:bg-blue-700 transition-all duration-300">
                      {" "}
                      View
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostTable;
