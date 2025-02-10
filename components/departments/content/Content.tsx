interface mainContentProps {
    title: string;
    content: string[];
}

const Content = ({ title, content }: mainContentProps) => {
    return (
        <div className="w-full dark:text-gray-300 p-4 xl:p-6 h-[450px] xl:h-[500px] overflow-y-auto overflow-x-hidden">
            <h2 className="text-[min(6vw,1.2rem)] mb-4 font-semibold border-b border-gray-200 pb-2 dark:border-gray-600 sticky top-0 bg-white dark:bg-accent z-10 pt-2">
                Full Stack Track - <span className="text-primary">{title}</span>
            </h2>
            <ul className="space-y-2 text-sm sm:text-base">
                {content.map((item, index) => (
                    <li
                        key={index}
                        className="leading-7 cursor-pointer hover:text-primary duration-300 transition-all"
                    >
                        {index + 1}. {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Content;
