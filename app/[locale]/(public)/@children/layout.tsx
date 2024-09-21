export type LayoutProps = {
  blog: React.ReactNode;
};

export default ({ blog }: LayoutProps): JSX.Element => {
  return (
    <div className="flex w-full flex-col">
      <div>{blog}</div>
    </div>
  );
};
