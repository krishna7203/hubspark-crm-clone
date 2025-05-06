
import { Employee, getInitials } from "@/data/employeesData";
import { Mail, Phone, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * @typedef {Object} EmployeeProfileProps
 * @property {Object|null} selectedEmployee
 * @property {Function} onAddEmployee
 */

/**
 * Employee Profile component
 * @param {EmployeeProfileProps} props 
 */
export default function EmployeeProfile({ selectedEmployee, onAddEmployee }) {
  if (!selectedEmployee) {
    return (
      <Card>
        <div className="flex flex-col items-center justify-center h-full py-16">
          <div className="rounded-full bg-muted p-6 mb-4">
            <User className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-1">Select an employee</h3>
          <p className="text-sm text-muted-foreground text-center mb-4">
            Click on an employee to view their profile
          </p>
          <Button variant="outline" onClick={onAddEmployee}>
            Add New Employee
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Profile</CardTitle>
        <CardDescription>View employee details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-20 w-20 mb-4">
              <AvatarFallback className="text-lg">
                {getInitials(selectedEmployee.name)}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">{selectedEmployee.name}</h3>
            <p className="text-muted-foreground">{selectedEmployee.position}</p>
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
                <p className="text-sm font-medium">{selectedEmployee.email}</p>
                <p className="text-sm">Phone:</p>
                <p className="text-sm font-medium">+1 (555) 987-6543</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Employment Details</h4>
              <div className="grid grid-cols-2 gap-1 mt-1">
                <p className="text-sm">Department:</p>
                <p className="text-sm font-medium">{selectedEmployee.department}</p>
                <p className="text-sm">Start Date:</p>
                <p className="text-sm font-medium">{selectedEmployee.startDate}</p>
                <p className="text-sm">Status:</p>
                <p className="text-sm font-medium">{selectedEmployee.status}</p>
                <p className="text-sm">Location:</p>
                <p className="text-sm font-medium">{selectedEmployee.location}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Current Projects</h4>
              <ul className="mt-1 space-y-1">
                <li className="text-sm">Customer Acquisition Campaign</li>
                <li className="text-sm">Product Launch</li>
                <li className="text-sm">Sales Strategy Development</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between pt-4 border-t">
            <Button variant="outline" size="sm">View Full Profile</Button>
            <Button size="sm">Edit Profile</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
