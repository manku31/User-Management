import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { User } from "@/types/user";
import { Label } from "@/components/ui/label";

interface UserDetailsDialogProps {
  user: User | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UserDetailsDialog({
  user,
  open,
  onOpenChange,
}: UserDetailsDialogProps) {
  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label>Name</Label>
            <p className="text-sm">{user.name}</p>
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <p className="text-sm">{user.email}</p>
          </div>
          <div className="space-y-2">
            <Label>Phone</Label>
            <p className="text-sm">{user.phone}</p>
          </div>
          <div className="space-y-2">
            <Label>Address</Label>
            <p className="text-sm">{user.address}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}