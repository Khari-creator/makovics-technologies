import SolutionLayout from "@/components/solutions/SolutionLayout";

export default function SchoolManagementPage() {
  return (
    <SolutionLayout
      badge="Smart Education Platform"
      title="School Management System"
      description="A unified digital platform designed to simplify academic and administrative operations. Manage students, teachers, parents, and school resources efficiently from one secure system."
      features={[
        "Student enrollment & records",
        "Teacher & staff management",
        "Class schedules & timetables",
        "Exams, grading & report cards",
        "Parent & student portals",
        "Fee management & invoicing",
      ]}
    />
  );
}
