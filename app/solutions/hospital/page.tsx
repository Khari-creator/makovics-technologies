import SolutionLayout from "@/components/solutions/SolutionLayout";

export default function HospitalPage() {
  return (
    <SolutionLayout
      title="Hospital Management System"
      subtitle="Digitizing healthcare operations and patient workflows"
      description="Our Hospital Management System streamlines clinical and administrative workflows by centralizing patient data, appointments, billing, and medical records. It is built to improve efficiency, reduce errors, and support quality healthcare delivery."
      features={[
        "Patient Registration & Records",
        "Doctor Scheduling & Appointments",
        "Billing & Invoicing Management",
        "Pharmacy & Inventory Control",
        "Laboratory & Test Results",
        "Staff & Department Management",
        "Medical Reports & Analytics",
        "Role-Based Access Control",
      ]}
      audience={[
        "Hospitals and medical centers",
        "Clinics and private practices",
        "Diagnostic laboratories",
        "Healthcare institutions",
      ]}
      benefits={[
        "Improved patient care coordination",
        "Reduced paperwork and errors",
        "Faster billing and payment processing",
        "Secure and organized medical records",
        "Operational efficiency across departments",
      ]}
    />
  );
}
