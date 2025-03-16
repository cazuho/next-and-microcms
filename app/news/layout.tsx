import { title } from "process";
import Hero from "../_components/Hero";
import Sheet from "../_components/Sheet";

export const metadata = {
  title: "ニュース",
};

type Props = {
  children: React.ReactNode;
};

// 前回アクセスから1分経過後にアクセスしたらキャッシュを更新する
export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
