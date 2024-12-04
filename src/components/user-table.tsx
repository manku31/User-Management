import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { User } from "@/types/user";
import { Trash2, Eye } from "lucide-react";

interface UserTableProps {
  users: User[];
  onDelete: (user: User) => void;
  onViewDetails: (user: User) => void;
}

export function UserTable({ users, onDelete, onViewDetails }: UserTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow 
              key={user.id} 
              className="hover:bg-muted/50 transition-colors"
              style={{
                animation: `fade-in 0.3s ease-out forwards`,
                animationDelay: `${parseInt(user.id.split('-')[0]) % 1000 * 0.0001}s`,
                opacity: 0
              }}
            >
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onDelete(user)}
                  className="hover:bg-destructive/10 transition-colors"
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => onViewDetails(user)}
                  className="hover:bg-primary/10 transition-colors"
                >
                  <Eye className="h-4 w-4 text-blue-500" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}