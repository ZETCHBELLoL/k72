import TransitionLink from "../common/TransitionLink";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-6">
      <TransitionLink to="/work" label="Work" />
      <TransitionLink to="/agency" label="Agency" />
    </div>
  );
};

export default HomeBottomText;
