import { slug } from "github-slugger";
import Category from "./Category";

export const Categories = ({ categories, currentSlug }) => {
  return (
    <div className="px-20 mt-10 border-t-2 text-dark border-b-2 border-solid border-dark py-4 flex items-start flex-wrap font-medium mx-10">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${slug(cat)}`} 
          name={cat} 
          active={currentSlug === slug(cat)} 
        />
      ))}
    </div>
  );
};
