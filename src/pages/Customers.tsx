
import { useState } from "react";
import { 
  Search, 
  Plus, 
  Filter, 
  Download, 
  MoreHorizontal, 
  Star, 
  Mail, 
  Phone,
  Users 
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const customers = [
  {
    id: 1,
    name: "Emily Johnson",
    email: "emily@example.com",
    company: "TechSolutions Inc",
    status: "Active",
    value: "$12,500",
    lastContact: "2 days ago"
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "michael@example.com",
    company: "Global Innovations",
    status: "Active",
    value: "$8,200",
    lastContact: "1 week ago"
  },
  {
    id: 3,
    name: "Sophia Martinez",
    email: "sophia@example.com",
    company: "Bright Futures LLC",
    status: "Inactive",
    value: "$5,750",
    lastContact: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david@example.com",
    company: "Strategic Partners",
    status: "Active",
    value: "$15,800",
    lastContact: "Yesterday"
  },
  {
    id: 5,
    name: "Olivia Thompson",
    email: "olivia@example.com",
    company: "Innovative Designs",
    status: "Pending",
    value: "$3,200",
    lastContact: "4 days ago"
  }
];

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .join('');
};

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<typeof customers[0] | null>(null);

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
        <p className="text-muted-foreground">Manage and analyze your customer base</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search customers..."
            className="pl-8 w-full md:w-[300px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Customer
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Customer List</CardTitle>
            <CardDescription>Manage and view all customer accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="hidden md:table-cell">Value</TableHead>
                    <TableHead className="hidden md:table-cell">Last Contact</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCustomers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-10 text-muted-foreground">
                        No customers found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredCustomers.map((customer) => (
                      <TableRow 
                        key={customer.id} 
                        className="cursor-pointer" 
                        onClick={() => setSelectedCustomer(customer)}
                      >
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{getInitials(customer.name)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{customer.name}</p>
                              <p className="text-sm text-muted-foreground">{customer.company}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge variant={
                            customer.status === "Active" ? "default" : 
                            customer.status === "Inactive" ? "secondary" : "outline"
                          }>
                            {customer.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{customer.value}</TableCell>
                        <TableCell className="hidden md:table-cell">{customer.lastContact}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Contact</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card>
          {selectedCustomer ? (
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
                        {getInitials(selectedCustomer.name)}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold">{selectedCustomer.name}</h3>
                    <p className="text-muted-foreground">{selectedCustomer.company}</p>
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
                        <p className="text-sm font-medium">{selectedCustomer.email}</p>
                        <p className="text-sm">Phone:</p>
                        <p className="text-sm font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Customer Value</h4>
                      <div className="grid grid-cols-2 gap-1 mt-1">
                        <p className="text-sm">Total Value:</p>
                        <p className="text-sm font-medium">{selectedCustomer.value}</p>
                        <p className="text-sm">Status:</p>
                        <p className="text-sm font-medium">{selectedCustomer.status}</p>
                        <p className="text-sm">Last Contact:</p>
                        <p className="text-sm font-medium">{selectedCustomer.lastContact}</p>
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
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-16">
              <div className="rounded-full bg-muted p-6 mb-4">
                <Users className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-1">Select a customer</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Click on a customer to view their details
              </p>
              <Button variant="outline">Create New Customer</Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
