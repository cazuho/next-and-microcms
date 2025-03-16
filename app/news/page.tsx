import { getNewsList } from "../_libs/microcms";
import NewsList from "../_components/NewsList";
import { NEWS_LIST_LIMIT } from "../_constants";
import Pagination from "../_components/Pagination";
import SearchField from "../_components/SearchField";

// 前回アクセスから1分経過後にアクセスしたらキャッシュを更新する
export const revalidate = 60;

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
