import { Dialog, DialogContent, DialogTrigger } from "../shadcn/Dialog";
import { ReactNode } from "react";
export interface MainDisplayProps {
  image1: string;
  image2: string;
  image3: string;
  header: string;
  content: string;
  footer: string;
  warning: string;
}

type ModalProps = {
  children: ReactNode;
  image: string;
};

const ModalImage = (props: ModalProps) => (
  <Dialog>
    <DialogTrigger
      asChild
      className="transform cursor-pointer transition duration-500 hover:scale-105"
    >
      {props.children}
    </DialogTrigger>
    <DialogContent className=" max-w-2xl bg-black bg-opacity-70">
      <img src={props.image} alt={props.image}></img>
    </DialogContent>
  </Dialog>
);

const MainDisplay = (props: MainDisplayProps) => {
  const { image1, image2, image3, header, content, footer, warning } = props;
  return (
    <section className="relative mb-32 mt-32 flex min-h-[540px] min-w-[320px] flex-wrap px-5 sm:flex-nowrap sm:gap-5 lg:px-0">
      <ModalImage image={image1}>
        <div
          className="h-[400px] w-3/6 bg-cover bg-center sm:mr-0 sm:h-[540px] sm:w-3/6 lg:w-2/6 "
          style={{ backgroundImage: `url(${image1}` }}
        ></div>
      </ModalImage>

      <div className="flex h-[400px] w-3/6 flex-col sm:h-[540px] sm:w-3/6 sm:gap-5 lg:w-2/6">
        <ModalImage image={image2}>
          <div
            className="h-full transform bg-cover bg-center"
            style={{ backgroundImage: `url(${image2}` }}
          ></div>
        </ModalImage>
        <ModalImage image={image3}>
          <div
            className="h-full transform bg-cover bg-center"
            style={{ backgroundImage: `url(${image3}` }}
          ></div>
        </ModalImage>
      </div>

      <div className="sw-full top-1/2 min-w-[320px] py-5 sm:absolute sm:-translate-y-1/2 sm:bg-black sm:bg-opacity-60 sm:px-5 lg:relative lg:top-0 lg:w-2/6 lg:translate-y-0 lg:bg-transparent lg:p-0">
        <header className="mb-6 border-b-2 pb-2 text-[26px] font-light">
          {header}
        </header>
        <div className="mb-8 text-left text-lg font-light text-white text-opacity-90">
          {content}
        </div>
        <div className="mb-4 font-bold text-red-600">{warning}</div>
        <footer className="text-lg font-bold">{footer}</footer>
      </div>
    </section>
  );
};

export { MainDisplay };
