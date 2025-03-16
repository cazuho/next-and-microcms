import { getNewsList } from "../../_libs/microcms";
import NewsList from "../../_components/NewsList";
import { NEWS_LIST_LIMIT } from "../../_constants";
import SearchField from "../../_components/SearchField";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
    </>
  );
}
