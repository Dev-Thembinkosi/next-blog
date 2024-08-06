import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import { FeaturePosts } from "../components/Home/FeaturePosts";
import { RecentPosts } from "../components/Home/RecentPosts";

export default function Home() {

  console.log(allBlogs)

  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs}/>
      <FeaturePosts blogs={allBlogs}/>
      <RecentPosts blogs={allBlogs} />
    </main>
  )
}
