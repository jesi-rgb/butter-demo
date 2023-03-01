import AppliedEffect from "./AppliedEffect";

export default function EffectList({ is3D, isMetal, isMoving }) {
  return (
    <>
      <div className="w-1/4 p-3">
        <h1 className="text-2xl mb-10 font-bold">Effects</h1>
        <div className="flex flex-col space-y-3">
          {is3D && <AppliedEffect effectName={"3D"} />}
          {isMetal && <AppliedEffect effectName={"Metal"} />}
          {isMoving && <AppliedEffect effectName={"Motion"} />}
        </div>
      </div>
    </>
  );
}
