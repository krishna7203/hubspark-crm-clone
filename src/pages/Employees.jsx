
import { useState } from "react";
import { 
  UserRound,
  Building
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { employees, employeeStats, departments } from "@/data/employeesData";
import EmployeeStats from "@/components/employees/EmployeeStats";
import EmployeeSearch from "@/components/employees/EmployeeSearch";
import EmployeeList from "@/components/employees/EmployeeList";
import EmployeeProfile from "@/components/employees/EmployeeProfile";
import DepartmentList from "@/components/employees/DepartmentList";
import AddEmployeeDialog from "@/components/employees/AddEmployeeDialog";

export default function Employees() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [addEmployeeOpen, setAddEmployeeOpen] = useState(false);

  const filteredEmployees = employees.filter(employee =>
    (selectedDepartment === "all" || employee.department.toLowerCase() === selectedDepartment) &&
    (employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
     employee.department.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Employees</h1>
          <p className="text-muted-foreground">Manage your organization's workforce</p>
        </div>
        
        <EmployeeStats stats={employeeStats} />
        
        <EmployeeSearch
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onAddClick={() => setAddEmployeeOpen(true)}
          departments={departments}
          selectedDepartment={selectedDepartment}
          onDepartmentChange={setSelectedDepartment}
        />

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
              <EmployeeList
                employees={filteredEmployees} 
                onSelectEmployee={setSelectedEmployee} 
              />
              
              <EmployeeProfile
                selectedEmployee={selectedEmployee} 
                onAddEmployee={() => setAddEmployeeOpen(true)} 
              />
            </div>
          </TabsContent>
          
          <TabsContent value="departments">
            <DepartmentList departments={departments} />
          </TabsContent>
        </Tabs>
      </div>
      
      <AddEmployeeDialog
        departments={departments}
        isOpen={addEmployeeOpen}
        onOpenChange={setAddEmployeeOpen}
      />
    </>
  );
}
