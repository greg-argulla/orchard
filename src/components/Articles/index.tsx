type ArticleType = {
  image: string;
  title: string;
  details: string;
  url: string;
};

export interface ArticlesProps {
  header: string;
  articles: [ArticleType, ArticleType, ArticleType]; // needs to be three
}

const Article = (props: ArticleType) => {
  const { image, title, details, url } = props;
  return (
    <article className="mb-8 w-full transform px-2 transition duration-500 hover:-translate-y-1 md:w-1/3">
      <div
        className="mb-5 h-64 w-full cursor-pointer border-b-4 border-red-600 bg-cover"
        style={{ backgroundImage: `url(${image}` }}
        onClick={() => {
          console.log(`Clicked ${title}`);
        }}
      ></div>
      <div className="mb-1 font-bold">{title}</div>
      <div className="gray mb-4 font-light text-white text-opacity-70">
        {details}
      </div>
      <a
        className="cursor-pointer border-b-2 border-red-700 p-1 font-bold"
        href={url}
        onClick={() => {
          console.log(`Clicked ${title}`);
        }}
      >
        READ MORE
      </a>
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
        {articles.map((props, index) => (
          <Article key={index} {...props} />
        ))}
      </div>
    </section>
  );
};

export { Articles };
