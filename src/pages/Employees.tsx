
import { useState } from "react";
import { 
  Search, 
  Plus, 
  Download, 
  MoreHorizontal, 
  Mail, 
  Phone,
  User,
  Calendar,
  Building,
  Briefcase,
  UserRound
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
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const employees = [
  {
    id: 1,
    name: "James Wilson",
    email: "james@hubspark.com",
    position: "Sales Manager",
    department: "Sales",
    location: "New York",
    status: "Active",
    startDate: "Jan 15, 2022"
  },
  {
    id: 2,
    name: "Ava Rodriguez",
    email: "ava@hubspark.com",
    position: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    status: "Active",
    startDate: "Mar 3, 2022"
  },
  {
    id: 3,
    name: "Liam Chen",
    email: "liam@hubspark.com",
    position: "Software Developer",
    department: "Engineering",
    location: "San Francisco",
    status: "Active",
    startDate: "Nov 12, 2021"
  },
  {
    id: 4,
    name: "Sarah Johnson",
    email: "sarah@hubspark.com",
    position: "HR Manager",
    department: "Human Resources",
    location: "Chicago",
    status: "On Leave",
    startDate: "Feb 8, 2023"
  },
  {
    id: 5,
    name: "Daniel Thompson",
    email: "daniel@hubspark.com",
    position: "Customer Support",
    department: "Support",
    location: "Remote",
    status: "Active",
    startDate: "Jun 20, 2022"
  }
];

// Stats data
const employeeStats = [
  { title: "Total Employees", value: 48, change: "+3", status: "positive" },
  { title: "Remote Employees", value: 18, change: "+5", status: "positive" },
  { title: "Avg. Tenure", value: "2.4 yrs", change: "+0.2", status: "positive" },
  { title: "Open Positions", value: 5, change: "-2", status: "negative" }
];

const departments = [
  { name: "Sales", employees: 12, manager: "James Wilson" },
  { name: "Marketing", employees: 8, manager: "Rebecca Jones" },
  { name: "Engineering", employees: 15, manager: "Michael Chen" },
  { name: "Customer Support", employees: 6, manager: "Julia Smith" },
  { name: "Human Resources", employees: 4, manager: "Sarah Johnson" },
  { name: "Finance", employees: 3, manager: "Robert Brown" },
];

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .join('');
};

export default function Employees() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<typeof employees[0] | null>(null);
  const [addEmployeeOpen, setAddEmployeeOpen] = useState(false);

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Employees</h1>
          <p className="text-muted-foreground">Manage your organization's workforce</p>
        </div>
        
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {employeeStats.map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`text-sm ${stat.status === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search employees..."
              className="pl-8 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Dialog open={addEmployeeOpen} onOpenChange={setAddEmployeeOpen}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Employee
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Add New Employee</DialogTitle>
                  <DialogDescription>
                    Enter the details for the new employee record.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="position" className="text-sm font-medium">
                        Position
                      </label>
                      <Input id="position" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="department" className="text-sm font-medium">
                        Department
                      </label>
                      <select
                        id="department"
                        className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="">Select department</option>
                        {departments.map((dept) => (
                          <option key={dept.name} value={dept.name}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="startDate" className="text-sm font-medium">
                        Start Date
                      </label>
                      <Input id="startDate" type="date" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-medium">
                        Location
                      </label>
                      <Input id="location" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setAddEmployeeOpen(false)}>
                    Cancel
                  </Button>
                  <Button>Add Employee</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Tabs defaultValue="employees" className="space-y-4">
          <TabsList>
            <TabsTrigger value="employees">
              <UserRound className="h-4 w-4 mr-2" />
              Employees
            </TabsTrigger>
            <TabsTrigger value="departments">
              <Building className="h-4 w-4 mr-2" />
              Departments
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="employees">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Employee Directory</CardTitle>
                  <CardDescription>Manage and view all employees</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Employee</TableHead>
                          <TableHead className="hidden md:table-cell">Department</TableHead>
                          <TableHead className="hidden md:table-cell">Status</TableHead>
                          <TableHead className="hidden md:table-cell">Location</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredEmployees.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-10 text-muted-foreground">
                              No employees found
                            </TableCell>
                          </TableRow>
                        ) : (
                          filteredEmployees.map((employee) => (
                            <TableRow 
                              key={employee.id} 
                              className="cursor-pointer" 
                              onClick={() => setSelectedEmployee(employee)}
                            >
                              <TableCell>
                                <div className="flex items-center gap-3">
                                  <Avatar>
                                    <AvatarFallback>{getInitials(employee.name)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{employee.name}</p>
                                    <p className="text-sm text-muted-foreground">{employee.position}</p>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">{employee.department}</TableCell>
                              <TableCell className="hidden md:table-cell">
                                <Badge variant={employee.status === "Active" ? "default" : "secondary"}>
                                  {employee.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">{employee.location}</TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreHorizontal className="h-4 w-4" />
                                      <span className="sr-only">Actions</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                    <DropdownMenuItem>Contact</DropdownMenuItem>
                                    <DropdownMenuItem className="text-red-600">
                                      Remove
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
                {selectedEmployee ? (
                  <>
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
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full py-16">
                    <div className="rounded-full bg-muted p-6 mb-4">
                      <User className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-1">Select an employee</h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      Click on an employee to view their profile
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setAddEmployeeOpen(true)}
                    >
                      Add New Employee
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="departments">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departments.map((dept, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <CardTitle>{dept.name}</CardTitle>
                    <CardDescription>
                      {dept.employees} employees
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Department Manager</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback>{getInitials(dept.manager)}</AvatarFallback>
                          </Avatar>
                          <span>{dept.manager}</span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">View Department</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Card className="border-dashed flex items-center justify-center py-8">
                <Button variant="outline" className="flex flex-col h-auto py-6">
                  <Plus className="h-8 w-8 mb-2" />
                  <span>Add New Department</span>
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
