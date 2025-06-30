import {
  TopicsTable,
  TopicsToolbar,
  TopicsBreadcrumb,
} from "@/components/dashboard";

export default function Page() {
  return (
    <>
      <TopicsBreadcrumb />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <TopicsToolbar />
        <TopicsTable />
      </div>
    </>
  );
}
