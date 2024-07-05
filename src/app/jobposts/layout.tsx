import JobBar from "../ui/components/job-bar";



export default function JobPostsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <JobBar/>
        {children}
      </div>
      
    );
  }