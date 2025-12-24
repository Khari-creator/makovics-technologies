import SolutionLayout from "@/components/solutions/SolutionLayout";

export default function SchoolPage() {
  return (
    <SolutionLayout
      title="School Management System"
      subtitle="A complete digital platform for academic and administrative excellence"
      description="Our School Management System is a comprehensive platform designed to manage academic, administrative, and financial operations within educational institutions. It enables schools to centralize data, automate processes, and improve communication among administrators, teachers, students, and parents."
      features={[
        "Student Admission, Enrollment & Records",
        "Class, Stream & Subject Management",
        "Examinations, Grading & Report Cards",
        "Fees Billing, Payments & Financial Tracking",
        "Teacher & Staff Records Management",
        "Attendance Tracking (Students & Staff)",
        "Parent and Student Portals",
        "Timetable & Academic Calendar Management",
        "Academic Performance Analytics",
        "Role-Based Access & Data Security",
      ]}
      audience={[
        "Primary and secondary schools",
        "Private and public educational institutions",
        "Colleges and vocational training centers",
        "International and multi-branch schools",
      ]}
      benefits={[
        "Centralized and accurate academic records",
        "Improved transparency between school and parents",
        "Automated fee management and reporting",
        "Reduced administrative workload for staff",
        "Better academic performance tracking",
        "Scalable system that grows with the institution",
      ]}
    />
  );
}
