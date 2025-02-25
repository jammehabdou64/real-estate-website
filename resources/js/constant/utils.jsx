export const recentPatients = [
  {
    id: "#A-125001",
    name: "Jordan Winters",
    checkIn: "20.03.2023",
    disease: "Ventricular Fibrillation",
    room: "A-105",
  },
  {
    id: "#A-125002",
    name: "Jakob Gouse",
    checkIn: "20.03.2023",
    disease: "Minor surgery",
    room: "A-125",
  },
  {
    id: "#A-125003",
    name: "Kaylynn Deidi",
    checkIn: "19.03.2023",
    disease: "Angioplasty",
    room: "B-23",
  },
];

export const upcomingConsultations = [
  {
    id: 1,
    patientName: "Mark Smith",
    type: "Standard Consultation",
    time: "10:00 - 11:30",
  },
  {
    id: 2,
    patientName: "Ann Chowry",
    type: "Follow-up",
    time: "11:30 - 12:00",
  },
  {
    id: 3,
    patientName: "Beth Alves",
    type: "Standard Consultation",
    time: "13:00 - 14:30",
  },
];

export const patients = [
  {
    id: "P001",
    name: "John Smith",
    age: 45,
    gender: "Male",
    phone: "(555) 123-4567",
    lastVisit: "2024-01-25",
    status: "Admitted",
  },
  {
    id: "P002",
    name: "Sarah Johnson",
    age: 32,
    gender: "Female",
    phone: "(555) 234-5678",
    lastVisit: "2024-01-24",
    status: "Outpatient",
  },
  // Add more sample data as needed
];

export const appointments = [
  {
    id: 1,
    time: "09:00 AM",
    patient: "John Doe",
    doctor: "Dr. Smith",
    type: "Check-up",
    status: "Completed",
  },
  {
    id: 2,
    time: "10:30 AM",
    patient: "Jane Smith",
    doctor: "Dr. Johnson",
    type: "Follow-up",
    status: "Pending",
  },
  {
    id: 3,
    time: "11:45 AM",
    patient: "Bob Brown",
    doctor: "Dr. Lee",
    type: "Consultation",
    status: "Cancelled",
  },
  {
    id: 4,
    time: "02:00 PM",
    patient: "Alice Johnson",
    doctor: "Dr. Garcia",
    type: "Check-up",
    status: "Pending",
  },
  {
    id: 5,
    time: "03:30 PM",
    patient: "Charlie Wilson",
    doctor: "Dr. Martinez",
    type: "Follow-up",
    status: "Pending",
  },
];

export const staffMembers = [
  {
    id: "ST001",
    name: "Dr. Michael Chen",
    department: "Cardiology",
    role: "Senior Cardiologist",
    contact: "(555) 123-4567",
    status: "Active",
  },
  {
    id: "ST002",
    name: "Dr. Emily Williams",
    department: "Neurology",
    role: "Neurologist",
    contact: "(555) 234-5678",
    status: "Active",
  },
  {
    id: "ST003",
    name: "Nurse Sarah Johnson",
    department: "Nursing",
    role: "Head Nurse",
    contact: "(555) 345-6789",
    status: "On Leave",
  },
  {
    id: "ST004",
    name: "Dr. David Lee",
    department: "Pediatrics",
    role: "Pediatrician",
    contact: "(555) 456-7890",
    status: "Active",
  },
  {
    id: "ST005",
    name: "Nurse Robert Brown",
    department: "Nursing",
    role: "Staff Nurse",
    contact: "(555) 567-8901",
    status: "Active",
  },
];

export const labTests = [
  {
    id: "LT001",
    patient: "John Smith",
    type: "Blood Test",
    date: "2024-01-28",
    status: "Completed",
  },
  {
    id: "LT002",
    patient: "Sarah Johnson",
    type: "X-Ray",
    date: "2024-01-28",
    status: "Critical",
  },
  {
    id: "LT003",
    patient: "Michael Brown",
    type: "MRI Scan",
    date: "2024-01-28",
    status: "In Progress",
  },
  {
    id: "LT004",
    patient: "Emily Davis",
    type: "CT Scan",
    date: "2024-01-28",
    status: "Pending",
  },
  {
    id: "LT005",
    patient: "Robert Wilson",
    type: "Ultrasound",
    date: "2024-01-28",
    status: "Completed",
  },
];

export const medicines = [
  {
    id: "MED001",
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    stock: 150,
    price: 5.99,
    expiry: "2025-01-28",
  },
  {
    id: "MED002",
    name: "Amoxicillin 250mg",
    category: "Antibiotics",
    stock: 15,
    price: 12.99,
    expiry: "2024-06-15",
  },
  {
    id: "MED003",
    name: "Omeprazole 20mg",
    category: "Gastric",
    stock: 85,
    price: 8.99,
    expiry: "2024-12-31",
  },
  {
    id: "MED004",
    name: "Lisinopril 10mg",
    category: "Cardiovascular",
    stock: 120,
    price: 15.99,
    expiry: "2025-03-15",
  },
  {
    id: "MED005",
    name: "Metformin 500mg",
    category: "Diabetes",
    stock: 200,
    price: 7.99,
    expiry: "2025-05-30",
  },
];
