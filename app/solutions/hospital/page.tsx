import SolutionLayout from "@/components/solutions/SolutionLayout";

export default function HospitalManagementPage() {
  return (
    <SolutionLayout
      badge="Healthcare Digital Solutions"
      title="Hospital Management System"
      description="A robust healthcare management solution built to streamline hospital operations, improve patient care, and ensure accurate medical record management across departments."
      features={[
        "Patient registration & records",
        "Appointment & queue management",
        "Doctor & staff scheduling",
        "Billing & insurance processing",
        "Pharmacy & lab management",
        "Secure medical data handling",
      ]}
    />
  );
}
