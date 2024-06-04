import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";

export const Blogs = () => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          <BlogCard
            authorName={"kasun"}
            title={
              "Learn more about customizing the default theme in the theme customization documentation."
            }
            content={
              "If you need to use a one-off font-weight value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value."
            }
            publishedDate={"12 Feb 2024"}
          />
          <BlogCard
            authorName={"kasun"}
            title={
              "Learn more about customizing the default theme in the theme customization documentation."
            }
            content={
              "If you need to use a one-off font-weight value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value."
            }
            publishedDate={"12 Feb 2024"}
          />
          <BlogCard
            authorName={"kasun"}
            title={
              "Learn more about customizing the default theme in the theme customization documentation."
            }
            content={
              "If you need to use a one-off font-weight value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value."
            }
            publishedDate={"12 Feb 2024"}
          />
        </div>
      </div>
    </div>
  );
};
