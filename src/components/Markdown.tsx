import { markdown } from "../hooks/markdown";

interface Props {
  input: string;
}

const Markdown: React.FC<Props> = ({ input }) => {
  return (
    <div className="flex flex-col w-screen md:w-2/4 p-8 box-border">
      <h1 className="text-gray-300 text-4xl mb-4">Markdown</h1>
      <div
        className="bg-gray-500 break-words w-full box-border min-h-[400px] rounded-sm p-2 [&_h1]:text-4xl [&_h1]:font-medium [&_h2]:text-3xl [&_h2]:font-medium [&_h3]:text-2xl [&_h3]:font-medium [&_hr]:border-gray-600 [&_pre]:whitespace-pre-wrap [height > 400px]:overflow-scroll overflow-x-hidden whitespace-pre-wrap"
        dangerouslySetInnerHTML={markdown(input)}
      ></div>
    </div>
  );
};

export default Markdown;
