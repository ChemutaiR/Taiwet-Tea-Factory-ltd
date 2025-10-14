interface EditJobPageProps {
  params: {
    id: string;
  };
}

export default function EditJobPage({ params }: EditJobPageProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">Edit Job Posting</h1>
      <p className="mt-4 text-lg text-gray-600">Job ID: {params.id}</p>
      
      {/* Job edit form will be implemented here */}
      <div className="mt-8">
        <p className="text-gray-500">Job edit form coming soon...</p>
      </div>
    </div>
  );
}
