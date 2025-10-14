interface ApplicationDetailsPageProps {
  params: {
    id: string;
  };
}

export default function ApplicationDetailsPage({ params }: ApplicationDetailsPageProps) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900">Application Details</h1>
      <p className="mt-4 text-lg text-gray-600">Application ID: {params.id}</p>
      
      {/* Application details will be implemented here */}
      <div className="mt-8">
        <p className="text-gray-500">Application details coming soon...</p>
      </div>
    </div>
  );
}
