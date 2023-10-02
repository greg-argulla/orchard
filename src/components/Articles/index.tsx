import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/Dialog";

type ArticleType = {
  image: string;
  title: string;
  details: string;
};

export interface ArticlesProps {
  header: string;
  articles: [ArticleType, ArticleType, ArticleType]; // needs to be three
}

const Article = (props: ArticleType) => {
  const { image, title, details } = props;
  return (
    <article className="mb-8 w-full px-2 md:w-1/3">
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="mb-5 h-64 w-full cursor-pointer border-b-4 border-red-600 bg-cover"
            style={{ backgroundImage: `url(${image}` }}
          ></div>
        </DialogTrigger>
        <DialogContent className="bg-black bg-opacity-70 sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{details}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div
              className="mb-5 h-[400px] w-full bg-cover"
              style={{ backgroundImage: `url(${image}` }}
            ></div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="mb-1 font-bold">{title}</div>
      <div className="gray mb-4 font-light text-white text-opacity-70">
        {details}
      </div>
      <span className="border-b-2 border-red-700 p-1 font-bold">READ MORE</span>
    </article>
  );
};

const Articles = (props: ArticlesProps) => {
  const { header, articles } = props;
  return (
    <section className="mb-48 px-5">
      <header className="mb-12 text-center text-4xl font-light">
        {header}
      </header>
      <div className="flex flex-col md:flex-row">
        {articles.map((props) => (
          <Article {...props} />
        ))}
      </div>
    </section>
  );
};

export { Articles };
