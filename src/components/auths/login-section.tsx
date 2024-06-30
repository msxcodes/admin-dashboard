"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const LoginSection = () => {
  const { toast } = useToast();

  return (
    <TabsContent value="login">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Welcome back, Please login to continue...
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="current">Username</Label>
            <Input id="current" type="text" placeholder="Enter username" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="new">Password</Label>
            <Input id="new" type="password" placeholder="Enter your password" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link
            href="/"
            onClick={() =>
              toast({
                title: "Login Successful",
                description: "You have logged in successfully",
              })
            }
          >
            <Button className="bg-blue-500 text-white font-semibold hover:bg-blue-700 transition-all duration-300 px-8">
              Login
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default LoginSection;
