import Button from "@/components/Button";

const AppRoutePage = () => {
  return (
    <div className="w-full flex flex-col items-center mt-40">
      <p className="w-fit mb-4 text-4xl font-bold">This is the App Route!</p>
      <Button message="App Router!" label="I still work!" />
    </div>
  );
};

export default AppRoutePage;
