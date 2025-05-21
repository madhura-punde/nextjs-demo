export const getServerSideProps = async () => {
  // Get the current date and time
  const currentDateTime = new Date().toLocaleString();

  // Pass it as a prop to the page
  return {
    props: {
      currentDateTime,
    },
  };
};

export default function CurrentTime({ currentDateTime }) {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Current Date & Time
        </h1>
        <p className="text-lg text-gray-700">{currentDateTime}</p>
        <p className="text-sm text-gray-500 mt-2">
          (This time is generated on the server)
        </p>
      </div>
    </div>
  );
}
