
import { Mail, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const getInitials = (name) => {
  return name
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .join('');
};

export default function CustomerDetail({ customer }) {
  return (
    <>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Customer Details</CardTitle>
          <Button variant="outline" size="icon">
            <Star className="h-4 w-4" />
          </Button>
        </div>
        <CardDescription>View and manage customer information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-20 w-20 mb-4">
              <AvatarFallback className="text-lg">
                {getInitials(customer.name)}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">{customer.name}</h3>
            <p className="text-muted-foreground">{customer.company}</p>
            <div className="flex gap-2 mt-2">
              <Button size="sm" variant="outline">
                <Mail className="h-4 w-4 mr-1" /> Email
              </Button>
              <Button size="sm" variant="outline">
                <Phone className="h-4 w-4 mr-1" /> Call
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Contact Information</h4>
              <div className="grid grid-cols-2 gap-1 mt-1">
                <p className="text-sm">Email:</p>
                <p className="text-sm font-medium">{customer.email}</p>
                <p className="text-sm">Phone:</p>
                <p className="text-sm font-medium">+1 (555) 123-4567</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Customer Value</h4>
              <div className="grid grid-cols-2 gap-1 mt-1">
                <p className="text-sm">Total Value:</p>
                <p className="text-sm font-medium">{customer.value}</p>
                <p className="text-sm">Status:</p>
                <p className="text-sm font-medium">{customer.status}</p>
                <p className="text-sm">Last Contact:</p>
                <p className="text-sm font-medium">{customer.lastContact}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Recent Activity</h4>
              <div className="space-y-2 mt-1">
                <div className="text-sm border-b pb-2">
                  <p className="font-medium">Email Opened</p>
                  <p className="text-muted-foreground">Yesterday at 4:23 PM</p>
                </div>
                <div className="text-sm border-b pb-2">
                  <p className="font-medium">Meeting Scheduled</p>
                  <p className="text-muted-foreground">3 days ago</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Quote Sent</p>
                  <p className="text-muted-foreground">1 week ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between pt-4 border-t">
            <Button variant="outline" size="sm">View Full Profile</Button>
            <Button size="sm">Edit Customer</Button>
          </div>
        </div>
      </CardContent>
    </>
  );
}
