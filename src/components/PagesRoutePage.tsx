import Button from "@/components/Button";

const PagesRoutePage = () => {
  return (
    <div className="w-full flex flex-col items-center mt-40">
      <p className="w-fit mb-4 text-4xl font-bold">This is the Pages Route!</p>
      <Button message="Pages Router!" label="I work!" />
    </div>
  );
};

export default PagesRoutePage;
