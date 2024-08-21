import { slug } from "github-slugger";
import Category from "./Category";

export const Categories = ({ categories, currentSlug }) => {
  return (
    <div>
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${slug(cat)}`} // Generate the correct slug for the link
          name={cat} // Pass the actual category name, not a string literal "cat"
          active={currentSlug === slug(cat)} // Compare the slugified category with the currentSlug
        />
      ))}
    </div>
  );
};
