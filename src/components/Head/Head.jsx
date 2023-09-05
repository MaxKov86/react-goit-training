export const Head = ({ className, name, children }) => {
  console.log(children);
  return (
    <>
      {children}
      <p className={className} name={name}>
        Hello World!
      </p>
    </>
  );
};
