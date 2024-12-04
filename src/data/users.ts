import { User } from "@/types/user";
import { generateUniqueId } from "@/lib/utils/id-generator";

export const initialUsers: User[] = [
  {
    id: generateUniqueId(),
    name: "James Wilson",
    email: "james@gmail.com",
    phone: "8583453234",
    address: "123 Main St, New York, NY"
  },
  {
    id: generateUniqueId(),
    name: "Clara Thompson",
    email: "clara@gmail.com",
    phone: "9983423854",
    address: "456 Oak Ave, Los Angeles, CA"
  },
  {
    id: generateUniqueId(),
    name: "Wayne Parker",
    email: "wayne@gmail.com",
    phone: "4348273323",
    address: "789 Pine Rd, Chicago, IL"
  },
  {
    id: generateUniqueId(),
    name: "Maya Rodriguez",
    email: "maya@gmail.com",
    phone: "9920558566",
    address: "321 Elm St, Houston, TX"
  },
  {
    id: generateUniqueId(),
    name: "Sarah Chen",
    email: "sarah.chen@gmail.com",
    phone: "3127894561",
    address: "567 Maple Dr, Seattle, WA"
  },
  {
    id: generateUniqueId(),
    name: "Michael Johnson",
    email: "michael.j@gmail.com",
    phone: "7456321890",
    address: "890 Cedar Ln, Boston, MA"
  },
  {
    id: generateUniqueId(),
    name: "Emma Davis",
    email: "emma.davis@gmail.com",
    phone: "2345678901",
    address: "432 Birch St, San Francisco, CA"
  },
  {
    id: generateUniqueId(),
    name: "Alex Martinez",
    email: "alex.m@gmail.com",
    phone: "8901234567",
    address: "765 Willow Ave, Miami, FL"
  },
  {
    id: generateUniqueId(),
    name: "Olivia Brown",
    email: "olivia.b@gmail.com",
    phone: "4567890123",
    address: "543 Ash Rd, Denver, CO"
  },
  {
    id: generateUniqueId(),
    name: "Daniel Kim",
    email: "daniel.kim@gmail.com",
    phone: "6789012345",
    address: "234 Palm St, Austin, TX"
  },
  {
    id: generateUniqueId(),
    name: "Sophie Taylor",
    email: "sophie.t@gmail.com",
    phone: "9012345678",
    address: "876 Beach Blvd, San Diego, CA"
  },
  {
    id: generateUniqueId(),
    name: "Lucas Anderson",
    email: "lucas.a@gmail.com",
    phone: "5678901234",
    address: "654 River Rd, Portland, OR"
  }
];