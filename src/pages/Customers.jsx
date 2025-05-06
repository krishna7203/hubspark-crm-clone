
import { useState } from "react";
import { Card } from "@/components/ui/card";
import CustomerList from "@/components/customers/CustomerList";
import CustomerDetail from "@/components/customers/CustomerDetail";
import CustomerEmpty from "@/components/customers/CustomerEmpty";
import CustomerToolbar from "@/components/customers/CustomerToolbar";
import { customers } from "@/data/customersData";

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
        <p className="text-muted-foreground">Manage and analyze your customer base</p>
      </div>

      <CustomerToolbar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <div className="flex flex-col">
            <div className="p-6 pb-0">
              <h2 className="text-2xl font-semibold leading-none tracking-tight">Customer List</h2>
              <p className="text-sm text-muted-foreground">Manage and view all customer accounts</p>
            </div>
            <div className="p-6">
              <CustomerList 
                customers={customers}
                onSelectCustomer={setSelectedCustomer}
                searchTerm={searchTerm}
              />
            </div>
          </div>
        </Card>

        <Card>
          {selectedCustomer ? (
            <CustomerDetail customer={selectedCustomer} />
          ) : (
            <CustomerEmpty />
          )}
        </Card>
      </div>
    </div>
  );
}
