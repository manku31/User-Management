import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

/**
 * Search input component with icon
 * Features hover and focus animations for enhanced UX
 */
export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative max-w-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="Search users by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9 transition-shadow duration-200 hover:shadow-md focus:shadow-md"
      />
    </div>
  );
}