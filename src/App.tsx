import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Users } from "lucide-react";
import { UserTable } from "@/components/user-table";
import { CreateUserDialog } from "@/components/create-user-dialog";
import { DeleteUserDialog } from "@/components/delete-user-dialog";
import { UserDetailsDialog } from "@/components/user-details-dialog";
import { SearchInput } from "@/components/search-input";
import { User } from "@/types/user";
import { initialUsers } from "@/data/users";
import { generateUniqueId } from "@/lib/utils/id-generator";

function App() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [userToView, setUserToView] = useState<User | null>(null);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateUser = (userData: Omit<User, "id">) => {
    const newUser = {
      ...userData,
      id: generateUniqueId(),
    };
    setUsers([...users, newUser]);
    toast.success("User created successfully!");
  };

  const handleDeleteUser = (user: User) => {
    setUserToDelete(user);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      setUsers(users.filter((u) => u.id !== userToDelete.id));
      toast.error("User deleted successfully!");
      setUserToDelete(null);
    }
  };

  const handleViewDetails = (user: User) => {
    setUserToView(user);
  };

  return (
    <div className="min-h-screen bg-background p-8 animate-fade-in">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between animate-slide-in">
          <div className="flex items-center gap-2">
            <Users className="h-8 w-8 text-primary animate-scale-in" />
            <h1 className="text-3xl font-bold">User Management</h1>
          </div>
          <CreateUserDialog onCreateUser={handleCreateUser} />
        </div>

        <div className="animate-fade-up">
          <SearchInput value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="rounded-lg border bg-card animate-fade-up">
          <UserTable
            users={filteredUsers}
            onDelete={handleDeleteUser}
            onViewDetails={handleViewDetails}
          />
        </div>

        <DeleteUserDialog
          user={userToDelete}
          open={!!userToDelete}
          onOpenChange={(open) => !open && setUserToDelete(null)}
          onConfirm={confirmDelete}
        />

        <UserDetailsDialog
          user={userToView}
          open={!!userToView}
          onOpenChange={(open) => !open && setUserToView(null)}
        />

        <Toaster position="bottom-right" />
      </div>
    </div>
  );
}

export default App;