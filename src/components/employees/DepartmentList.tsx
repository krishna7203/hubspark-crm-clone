
import { Department, getInitials } from "@/data/employeesData";
import { Plus } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DepartmentListProps {
  departments: Department[];
}

export default function DepartmentList({ departments }: DepartmentListProps) {
  return (
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
  );
}
