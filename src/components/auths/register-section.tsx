"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
const RegisterSection = () => {
  const { toast } = useToast();

  return (
    <TabsContent value="register">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Welcome, Please register to use our services...
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Enter your name" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="name">Username</Label>
            <Input id="name" type="text" placeholder="Enter a username" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="name">New Password</Label>
            <Input
              id="name"
              type="password"
              placeholder="Enter a new password"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Confirm Password</Label>
            <Input id="username" placeholder="Confirm the password" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link
            href={"/"}
            onClick={() =>
              toast({
                title: "Registration Successful",
                description: "You have registered successfully",
              })
            }
          >
            <Button className="font-semibold bg-blue-500 text-white px-8 hover:bg-blue-700 transition-all duration-300">
              Register
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default RegisterSection;
