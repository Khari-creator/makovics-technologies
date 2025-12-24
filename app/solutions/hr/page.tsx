import SolutionLayout from "@/components/solutions/SolutionLayout";

export default function HRPage() {
  return (
    <SolutionLayout
      title="HR Management System"
      subtitle="Centralized employee management and workforce operations"
      description="Our HR Management System is designed to help organizations efficiently manage employee data, payroll, attendance, and performance. It reduces administrative overhead while improving transparency, compliance, and decision-making across human resource operations."
      features={[
        "Employee Records & Profiles",
        "Attendance & Leave Management",
        "Payroll Processing & Payslips",
        "Roles, Departments & Hierarchies",
        "Performance Tracking & Appraisals",
        "HR Reports & Analytics",
        "User Access Control & Security",
      ]}
      audience={[
        "Small to medium-sized enterprises",
        "Large organizations with structured HR teams",
        "NGOs and institutions",
        "Companies with distributed workforces",
      ]}
      benefits={[
        "Reduced manual HR processes",
        "Improved employee data accuracy",
        "Faster payroll and compliance reporting",
        "Clear visibility into workforce performance",
        "Scalable HR operations as the company grows",
      ]}
    />
  );
}
