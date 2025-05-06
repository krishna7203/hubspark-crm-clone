
export interface Customer {
  id: number;
  name: string;
  email: string;
  company: string;
  status: string;
  value: string;
  lastContact: string;
}

export const customers: Customer[] = [
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
