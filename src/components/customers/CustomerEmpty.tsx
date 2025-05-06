
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CustomerEmpty() {
  return (
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
  );
}
