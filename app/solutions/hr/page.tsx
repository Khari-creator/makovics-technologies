import SolutionLayout from "@/components/solutions/SolutionLayout";

export default function HRPage() {
  return (
    <SolutionLayout
      badge="Empower Your Workforce"
      title="HR Management System"
      description="A complete human resource management platform that simplifies employee lifecycle management. From recruitment to retirement, manage your most valuable asset with ease."
      features={[
        "Employee self-service portal",
        "Payroll management",
        "Leave & attendance tracking",
        "Performance evaluations",
        "Recruitment pipeline",
        "Training management",
      ]}
    />
  );
}
