
export interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
  location: string;
  status: string;
  startDate: string;
}

export const employees: Employee[] = [
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

export interface EmployeeStat {
  title: string;
  value: string | number;
  change: string;
  status: "positive" | "negative";
}

export const employeeStats: EmployeeStat[] = [
  { title: "Total Employees", value: 48, change: "+3", status: "positive" },
  { title: "Remote Employees", value: 18, change: "+5", status: "positive" },
  { title: "Avg. Tenure", value: "2.4 yrs", change: "+0.2", status: "positive" },
  { title: "Open Positions", value: 5, change: "-2", status: "negative" }
];

export interface Department {
  name: string;
  employees: number;
  manager: string;
}

export const departments: Department[] = [
  { name: "Sales", employees: 12, manager: "James Wilson" },
  { name: "Marketing", employees: 8, manager: "Rebecca Jones" },
  { name: "Engineering", employees: 15, manager: "Michael Chen" },
  { name: "Customer Support", employees: 6, manager: "Julia Smith" },
  { name: "Human Resources", employees: 4, manager: "Sarah Johnson" },
  { name: "Finance", employees: 3, manager: "Robert Brown" },
];

export const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .join('');
};
