interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="text-white text-[40px] lg:text-[120px] text-start w-full p-4 lg:px-16 z-10">
      {title}
    </div>
  );
};

export default SectionTitle; 